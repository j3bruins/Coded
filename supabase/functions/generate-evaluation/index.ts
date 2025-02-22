
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { linkedinProfile, additionalInfo } = await req.json();

    const prompt = `As an AI talent evaluator, analyze the following professional information:

LinkedIn Profile: ${linkedinProfile}
Additional Information: ${additionalInfo}

Provide a detailed evaluation of their skills and recommend how to tokenize them. Focus on:
1. Technical Skills Token (TST) opportunities
2. Project Management Token (PMT) potential
3. Industry Expertise Token (IET) valuation

Format the response with clear sections and actionable recommendations.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are an expert AI evaluator specializing in skill tokenization and professional assessment.' },
          { role: 'user', content: prompt }
        ],
      }),
    });

    const data = await response.json();
    const evaluation = data.choices[0].message.content;

    return new Response(JSON.stringify({ evaluation }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in generate-evaluation function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
