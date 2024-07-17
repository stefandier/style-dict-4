
import { register } from '@tokens-studio/sd-transforms';
import { flattenTokens, resolveReferences, typeDtcgDelegate } from "style-dictionary/utils";
import StyleDictionary from "style-dictionary";
import type { DesignToken } from 'style-dictionary/types';

const sd = new StyleDictionary("config.json");
//const sd = new StyleDictionary();
sd.log.verbosity = "verbose";


await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
