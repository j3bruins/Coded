
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { linkedinProfile, additionalInfo } = await req.json();
    console.log('Received request for evaluation:', { linkedinProfile, additionalInfo });

    if (!openAIApiKey) {
      throw new Error('OpenAI API key is not configured');
    }

    const prompt = `As an AI talent evaluator, analyze the following professional information:

LinkedIn Profile: ${linkedinProfile || 'Not provided'}
Additional Information: ${additionalInfo || 'Not provided'}

Please provide a detailed evaluation of the professional profile focusing on the following areas:

1. Technical Skills Assessment:
   - Primary technical competencies
   - Skill level indicators
   - Areas for potential skill tokenization

2. Professional Experience Analysis:
   - Key achievements and their market value
   - Project management capabilities
   - Leadership and collaboration indicators

3. Industry Expertise:
   - Domain knowledge areas
   - Industry-specific certifications or qualifications
   - Market positioning recommendations

4. Tokenization Strategy:
   - Recommended token categories (Technical, Management, Industry Expertise)
   - Token value proposition
   - Marketplace positioning recommendations

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
          {
            role: 'system',
            content: 'You are an expert AI evaluator specializing in skill tokenization and professional assessment. Provide detailed, structured analysis with clear recommendations.'
          },
          { role: 'user', content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      throw new Error('Failed to generate evaluation');
    }

    const data = await response.json();
    console.log('Generated evaluation successfully');

    return new Response(JSON.stringify({ 
      evaluation: data.choices[0].message.content 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in generate-evaluation function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to generate evaluation' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

