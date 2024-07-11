
import StyleDictionary from "style-dictionary";
import { getReferences, usesReferences } from "style-dictionary/utils";
import JsonToTS from 'json-to-ts';

const sd = new StyleDictionary("config.json");

function getValue(token) {
  return usesReferences(token) ? getReferences(token).map(ref => ref.value).join(", ") : token.value;
}

sd.registerFormat({
  name: 'typescript/accurate-module-declarations',
  format: function ({ dictionary }) {
    return (
      'declare const root: RootObject\n' +
      'export default root\n' +
      JsonToTS(dictionary.tokens).join('\n')
    );
  },
});

sd.registerFormat({
  name: "typescript/module-declarations",
  format: function({ dictionary }) {
    const output = {};
    
    dictionary.allTokens.forEach(token => {
      const [category, item, subitem] = token.path;
      
      if (!output[category]) output[category] = {};
      if (!output[category][item]) output[category][item] = {};
      
      output[category][item][subitem] = getValue(token);
    });

    const tsOutput = JsonToTS(output).map(type => type.replace(/"DesignToken"/g, '"string"')).join("\n");

    return (
      "declare const root: RootObject\n" +
      "export default root\n" +
      tsOutput
    );
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
