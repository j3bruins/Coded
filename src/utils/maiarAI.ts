
import { createRuntime } from "@maiar-ai/core";
import { OpenAIProvider } from "@maiar-ai/model-openai";
import { PluginTextGeneration } from "@maiar-ai/plugin-text";

let runtime: ReturnType<typeof createRuntime> | null = null;

export const initializeMaiarAI = async (openAIKey: string) => {
  if (runtime) return runtime;

  runtime = createRuntime({
    model: new OpenAIProvider({
      apiKey: openAIKey,
      model: "gpt-4o-mini" // Using our supported model
    }),
    plugins: [new PluginTextGeneration()]
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
    const result = await runtime.process({
      type: "text_generation",
      input: JSON.stringify(context),
      parameters: {
        format: "json",
        style: "analytical",
        temperature: 0.7
      }
    });

    return result;
  } catch (error) {
    console.error("Error in Maiar AI evaluation:", error);
    throw error;
  }
};

// Cleanup function for runtime
export const shutdownMaiarAI = async () => {
  if (runtime) {
    await runtime.stop();
    runtime = null;
  }
};
