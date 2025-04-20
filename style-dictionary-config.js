import StyleDictionary from "style-dictionary";
import { register } from "@tokens-studio/sd-transforms";

// Register the custom transforms (if any)
register(StyleDictionary, { excludeParentKeys: true });

// Create an instance of StyleDictionary with your configuration
const sd = new StyleDictionary({
  source: ["tokens/**/*.json"], // Path to your token files
  preprocessors: ["tokens-studio"], // Use tokens-studio for preprocessing
  platforms: {
    css: {
      transforms: ["name/kebab", "attribute/cti"], // Ensure 'name/kebab' is applied for kebab-case
      buildPath: "build/css/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
        },
      ],
    },
  },
});

// Execute build
await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
