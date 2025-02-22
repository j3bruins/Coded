
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
    console.log('Received request for evaluation:', { linkedinProfile, additionalInfo });

    if (!openAIApiKey) {
      throw new Error('OpenAI API key is not configured');
    }

    const prompt = `As an AI talent evaluator, analyze the following professional information:

LinkedIn Profile: ${linkedinProfile || 'Not provided'}
Additional Information: ${additionalInfo || 'Not provided'}

Please provide a detailed evaluation of the professional profile and recommend specific skills that could be tokenized as NFTs. Structure your response in the following format:

1. Overall Assessment:
   - Evaluate key skills and experiences
   - Identify core competencies
   - Highlight unique selling points

2. NFT Token Recommendations:
   For each recommended skill token, provide:
   - Token Name
   - Category (Technical, Management, Industry Expertise)
   - Description
   - Suggested Market Value

Focus on high-value skills that would be attractive in a marketplace setting.
Provide specific, actionable recommendations for tokenization.

Format the response to be easily parsed, with clear sections for the assessment and NFT recommendations.`;

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
            content: 'You are an expert AI evaluator specializing in skill tokenization and professional assessment. Provide detailed analysis and specific NFT token recommendations.'
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

    // Parse the AI response to extract NFT recommendations
    const content = data.choices[0].message.content;
    
    // Mock NFT recommendations (in production, you would parse these from the AI response)
    const recommendedNFTs = [
      {
        name: "Full Stack Development",
        category: "Technical",
        description: "Comprehensive web development expertise across frontend and backend technologies",
        suggestedPrice: "0.5 ETH"
      },
      {
        name: "Project Management",
        category: "Management",
        description: "Experience in leading complex technical projects and teams",
        suggestedPrice: "0.3 ETH"
      },
      {
        name: "Blockchain Architecture",
        category: "Technical",
        description: "Expertise in designing and implementing blockchain solutions",
        suggestedPrice: "0.8 ETH"
      }
    ];

    return new Response(JSON.stringify({ 
      evaluation: content,
      recommendedNFTs
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
