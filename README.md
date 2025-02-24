# Coded

This project, built with Lovable, helps users create NFTs based on their skills. It connects to the Maiar AI framework to power its functionality.

## Link to Maiar and Plugins

- **Maiar Framework**: We use Maiar, a composable, plugin-based AI agent framework from Uranium Corporation (see [Maiar GitHub](https://github.com/UraniumCorporation/maiar-ai)). Maiar handles the AI logic for generating NFT concepts from user-input skills.
- **Plugins**: The project taps into Maiar’s plugin ecosystem (see [Maiar Plugin Registry](https://github.com/UraniumCorporation/plugin-registry)). Plugins like text processing or image generation could be used to turn skills into NFT descriptions and visuals.
- **How It Works**: Users enter skills on the "Create NFT" page, which calls an API (planned to integrate with Maiar’s runtime). Maiar processes the input via plugins and returns NFT data.

This integration is in progress—future updates will fully connect the frontend to a Maiar backend.

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/91ac825b-1b13-4837-ab9e-be96b6175948) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
