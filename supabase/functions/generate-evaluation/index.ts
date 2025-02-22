
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

    const prompt = `As an AI skill evaluator focused on tokenization, analyze this professional information:

LinkedIn Profile: ${linkedinProfile || 'Not provided'}
Additional Information: ${additionalInfo || 'Not provided'}

First, identify key skills and expertise areas. Then, for each significant skill:
1. Determine its market value based on current industry demand
2. Categorize it appropriately
3. Write a clear, concise description

Format your response in two parts:
1. General Assessment: Brief overview of the professional profile
2. NFT Recommendations: List of specific skills that could be tokenized

For each NFT recommendation, include:
- Name: The specific skill or competency
- Category: Technical, Management, or Industry Expertise
- Description: 1-2 sentences explaining the skill
- Suggested Price: Estimated market value in SOL (Solana)

Focus on concrete, marketable skills rather than general qualities. Be specific and realistic in your valuations. Price the NFTs in SOL (Solana) with values typically ranging from 0.1 to 10 SOL based on skill rarity and demand.

Format the NFT recommendations to be easily parsed, following this exact structure for each:
---NFT START---
Name: [Skill Name]
Category: [Category]
Description: [Description]
Price: [X.XX SOL]
---NFT END---`;

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
            content: 'You are an expert AI evaluator specializing in skill tokenization and professional assessment on the Solana blockchain.'
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
    const content = data.choices[0].message.content;
    
    // Parse NFT recommendations from the AI response
    const nftRecommendations: Array<{
      name: string;
      category: string;
      description: string;
      suggestedPrice: string;
    }> = [];

    const nftBlocks = content.split('---NFT START---')
      .slice(1) // Skip the first element (before first NFT block)
      .map(block => block.split('---NFT END---')[0].trim());

    nftBlocks.forEach(block => {
      const name = block.match(/Name: (.+)/)?.[1];
      const category = block.match(/Category: (.+)/)?.[1];
      const description = block.match(/Description: (.+)/)?.[1];
      const price = block.match(/Price: (.+)/)?.[1];

      if (name && category && description && price) {
        nftRecommendations.push({
          name: name.trim(),
          category: category.trim(),
          description: description.trim(),
          suggestedPrice: price.trim()
        });
      }
    });

    // Get the general assessment (everything before the first NFT block)
    const generalAssessment = content.split('---NFT START---')[0].trim();

    return new Response(JSON.stringify({ 
      evaluation: generalAssessment,
      recommendedNFTs: nftRecommendations
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

