
import { createRuntime, type Runtime } from "@maiar-ai/core";
import { OpenAIProvider } from "@maiar-ai/model-openai";
import { PluginTextGeneration } from "@maiar-ai/plugin-text";
import { MemoryManager } from "@maiar-ai/memory";

let runtime: Runtime | null = null;

export const initializeMaiarAI = async (openAIKey: string) => {
  if (runtime) return runtime;

  runtime = createRuntime({
    model: new OpenAIProvider({
      apiKey: openAIKey,
      model: "gpt-4o-mini"
    }),
    plugins: [new PluginTextGeneration()],
    memory: new MemoryManager({
      type: 'memory'
    })
  });

  await runtime.start();
  return runtime;
};

export const generateSkillEvaluation = async (
  linkedinProfile: string,
  additionalInfo: string,
  resumeText?: string
) => {
  if (!runtime) {
    throw new Error("Maiar AI runtime not initialized");
  }

  const context = {
    linkedinProfile,
    additionalInfo,
    resumeText,
    task: "skill_evaluation",
    requirements: [
      "Identify key professional skills",
      "Evaluate skill levels and market value",
      "Suggest potential tokenization opportunities",
      "Consider current market demand"
    ]
  };

  try {
    const response = await runtime.generate({
      input: {
        type: "text",
        content: JSON.stringify(context)
      },
      parameters: {
        format: "json",
        style: "analytical",
        temperature: 0.7
      }
    });

    return {
      evaluation: response.output,
      recommendedNFTs: response.metadata?.recommendedNFTs || []
    };
  } catch (error) {
    console.error("Error in Maiar AI evaluation:", error);
    throw error;
  }
};

export const shutdownMaiarAI = async () => {
  if (runtime) {
    await runtime.stop();
    runtime = null;
  }
};
