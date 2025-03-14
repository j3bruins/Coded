# Coded


@coded/plugin-jupiter
This package is part of the Cubie plugin repository for the (Maiar)[https://maiar.dev] ecosystem, designed to work seamlessly with @maiar-ai/core.

Documentation
For detailed documentation, examples, and API reference, visit: https://maiar.dev/docs

Beyond the trenches, Coded helps Degens tokenize their talents and sell them around the world. Coded helps users create NFTs based on their skills. It connects to the Maiar AI framework to power its functionality.

# Configuration 

The Jupiter plugin requires the following configuration

 ```typescript
interface PluginJupiterConfig {
  apiKey?: string; // Your jupiter x-api-key
  store?: (tokens: JupiterTokenResponse[]) => Promise<void>; // An optional method for storing the remote token list to a internal database/store
  load?: (params: LoadJupiterTokenParams) => Promise<JupiterTokenResponse[]>; // An optional method to load and search the synced token list by token name and symbol
}
```

# Optional Configuration

apiKey: This is your Jupiter x-api-key. Optional (default: '')
store: A function that accepts a list of JupiterTokenResponse objects and stores them in a database or filesystem
loader: A function that accepts an object {name?: string, symbol?: string} that can be used to search the tokens stored by store()

# Plugin Information

# Actions

get_contract_address: Get the contract address of a token when provided the token name or symbol. This method requires that JupiterService was provided with store and loader methods
get_quote: Fetch a quote between 2 input mints when provided with an amount. The swapDirection in this method may be inferred due to the nature of the users request.
get_price: Get the price of a list of input mints with an optional vsToken that can be supplied to use as the base of the price (default: usd).
get_token_info: Get standard token info when supplied with a contract / mint address.
For more detailed examples and advanced usage, visit our documentation (https://maiar.dev/docs).


### Creation

First you create a storage/loader functions for the token information. In this example we are mocking up a memory store.

```typescript
const memoryStore: JupiterTokenResponse[] = [];

// mock a storage function to store data
async function storeData(data: JupiterTokenResponse[]) {
  memoryStory.push(...data);
}

// mock a loader function from an external storage source
async function loadData(params: LoadJupiterTokenParams) {
  return (
    params &&
    memoryStory.filter(
      (token) =>
        (params.name &&
          token.name.toLocaleLowerCase() === params.name.toLocaleLowerCase()) ||
        (params.ticker &&
          token.symbol.toLocaleLowerCase() ===
            params.ticker.toLocaleLowerCase())
    )
  );
}
```

Then you want to initialize your agent runtime, and pass the `storeData()` and `loadData()` methods into the `new PluginJupiter()` call.

```typescript
import { createRuntime } from "@maiar-ai/core";

// Import providers
import { OpenAIProvider } from "@maiar-ai/model-openai";
import { SQLiteProvider } from "@maiar-ai/memory-sqlite";

// Import all plugins
import { PluginTextGeneration } from "@maiar-ai/plugin-text";
import { PluginTime } from "@maiar-ai/plugin-time";
import { PluginCharacter } from "@maiar-ai/plugin-character";
// Create and start the agent
const runtime = createRuntime({
  model: new OpenAIProvider({
    model: "gpt-4o",
    apiKey: process.env.OPENAI_API_KEY as string,
  }),
  memory: new SQLiteProvider({
    dbPath: path.join(process.cwd(), "data", "conversations.db"),
  }),
  plugins: [
    new PluginTextGeneration(),
    new PluginTime(),
    new PluginCharacter({
      character: fs.readFileSync(
        path.join(process.cwd(), "character.xml"),
        "utf-8"
      ),
    }),
    new PluginJupiter({
      store: storeData,
      load: loadData,
    }),
  ],
});
```

Now you can start your agents and test it out.

```typescript
// Start the runtime if this file is run directly
if (require.main === module) {
  console.log("Starting agent...");
  runtime.start().catch((error) => {
    console.error("Failed to start agent:", error);
    process.exit(1);
  });

  // Handle shutdown gracefully
  process.on("SIGINT", async () => {
    console.log("Shutting down agent...");
    await runtime.stop();
    process.exit(0);
  });
}
```



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
