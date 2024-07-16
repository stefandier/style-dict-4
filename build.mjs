
import StyleDictionary from "style-dictionary";
import { getReferences, resolveReferences, usesReferences } from "style-dictionary/utils";
import JsonToTS from 'json-to-ts';

const sd = new StyleDictionary("config.json");
sd.log.verbosity = "verbose";

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
