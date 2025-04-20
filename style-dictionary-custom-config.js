import StyleDictionary from "style-dictionary";
import { register } from "@tokens-studio/sd-transforms";

// Register the custom transforms (if any)
register(StyleDictionary);

// Create an instance of StyleDictionary with your configuration
const sd = new StyleDictionary({
  source: ["tokens/**/*.json"], // Path to your token files
  preprocessors: ["tokens-studio"], // Use tokens-studio for preprocessing
  platforms: {
    css: {
      transforms: ["name/kebab"], // Apply the kebab-case transform for token names
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

(async () => {
  try {
    // Clean up old builds before running a new build
    await sd.cleanAllPlatforms();
    // Build the platform files
    await sd.buildAllPlatforms();
    console.log("Tokens built successfully!");
  } catch (error) {
    console.error("Error during build:", error);
  }
})();
