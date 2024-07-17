
import { register } from '@tokens-studio/sd-transforms';
import { getReferences, resolveReferences, usesReferences } from "style-dictionary/utils";
import StyleDictionary from "style-dictionary";
import JsonToTS from 'json-to-ts';

const sd = new StyleDictionary("config.json");
//const sd = new StyleDictionary();
sd.log.verbosity = "verbose";

//resolveReferences(sd.allTokens);

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
register(sd, {
    expand: {
        composition: true,
        typography: false,
        border: false,
        shadow: false,
    },
    excludeParentKeys: false,
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
