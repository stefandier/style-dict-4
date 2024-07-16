declare const root: RootObject
export default root
interface RootObject {
  '00 - Primitives': _00Primitives;
  '01 - Semantic Colors': _01SemanticColors;
  '02 - Spacing': _02Spacing;
  '03 - Blurs': _03Blurs;
  '04 - Typography': _04Typography;
  '$extensions': Extensions3;
}
interface Extensions3 {
  'tokens-bruecke-meta': Tokensbrueckemeta;
}
interface Tokensbrueckemeta {
  useDTCGKeys: boolean;
  colorMode: string;
  variableCollections: string[];
  createdAt: string;
}
interface _04Typography {
  font: Font;
}
interface Font {
  family: Family;
  weight: Weight;
}
interface Weight {
  regular: _50;
  'semi-bold': _50;
  bold: _50;
  medium: _50;
  light: _50;
}
interface Family {
  body: _50;
  title: _50;
}
interface _03Blurs {
  'blur-4': Blur4;
  'blur-8': Blur4;
  'blur-16': Blur4;
  'blur-24': Blur4;
  'blur-32': Blur4;
  'blur-40': Blur4;
}
interface Blur4 {
  '$type': string;
  '$value': Value;
  '$description': string;
  '$extensions': Extensions;
  filePath: string;
  isSource: boolean;
  original: Original;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface _02Spacing {
  Radius: Radius;
  Spacing: Spacing;
}
interface Spacing {
  'spacing-xs': Radiixxs;
  'spacing-s': Radiixxs;
  'spacing-m': Radiixxs;
  'spacing-l': Radiixxs;
  'spacing-xl': Radiixxs;
  'spacing-xxl': Radiixxs;
  'spacing-xxs': Radiixxs;
  'spacing-none': Radiixxs;
}
interface Radius {
  'radii-xxs': Radiixxs;
  'radii-xs': Radiixxs;
  'radii-s': Radiixxs;
  'radii-l': Radiixxs;
  'radii-xl': Radiixxs;
  'radii-full': Radiixxs;
  'radii-m': Radiixxs;
  'radii-none': Radiixxs;
  'radii-xxl': Radiixxs;
}
interface Radiixxs {
  '$type': string;
  '$value': Value;
  '$description': string;
  '$extensions': Extensions;
  filePath: string;
  isSource: boolean;
  original: Original;
  name: string;
  attributes: Attributes3;
  path: string[];
}
interface Value {
  original: string;
  number: number;
  decimal: number;
  scale: number;
}
interface _01SemanticColors {
  Text: Text;
  Background: Background;
  Icon: Icon;
  Border: Border;
  Effect: Effect;
  white: White;
  black: White;
  transparent: White;
}
interface White {
  '$type': string;
  '$value': string;
  '$description': string;
  '$extensions': Extensions2;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Effect {
  Gradient: Gradient;
  Shadow: Shadow;
}
interface Shadow {
  'light-outer': Primary0;
  'light-inner': Primary0;
  Dark: Dark;
}
interface Dark {
  '50': Lightstart;
  '100': Lightstart;
}
interface Gradient {
  'primary-0': Primary0;
  'primary-100': Primary0;
  'accent-0': Primary0;
  'accent-100': Primary0;
  Overlay: Overlay;
}
interface Overlay {
  'light-start': Lightstart;
  'light-stop': Lightstart;
  'dark-start': Lightstart;
  'dark-stop': Lightstart;
  'dark-start-fixed': Lightstart;
  'dark-stop-fixed': Lightstart;
}
interface Lightstart {
  '$type': string;
  '$value': string;
  '$description': string;
  '$extensions': Extensions2;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes4;
  path: string[];
}
interface Attributes4 {
  category: string;
  type: string;
  item: string;
  subitem: string;
  state: string;
}
interface Primary0 {
  '$type': string;
  '$value': string;
  '$description': string;
  '$extensions': Extensions2;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes2;
  path: string[];
}
interface Border {
  'border-success': Textsuccess;
  'border-container': Textsuccess;
  'border-strong': Textsuccess;
  'border-inactive': Textsuccess;
  'border-primary': Textsuccess;
  'border-error': Textsuccess;
  'border-warning': Textsuccess;
  'border-info': Textsuccess;
  'border-input': Textsuccess;
  'border-input-hover': Textsuccess;
  'border-input-focus': Textsuccess;
  'border-subtle': Textsuccess;
  'border-primary-focus': Textsuccess;
  'border-primary-active': Textsuccess;
  'border-primary-hover': Textsuccess;
  'border-primary-disabled': Textsuccess;
  'border-primary-subtle': Textsuccess;
  'border-primary-subtle-hover': Textsuccess;
  'border-input-disabled': Textsuccess;
  'border-strong-on-primary': Textsuccess;
}
interface Icon {
  'icon-success': Textsuccess;
  'icon-warning': Textsuccess;
  'icon-error': Textsuccess;
  'icon-info': Textsuccess;
  'icon-default': Textsuccess;
  'icon-primary': Textsuccess;
  'icon-inactive': Textsuccess;
  'icon-muted': Textsuccess;
  'icon-neutral': Textsuccess;
  'icon-on-primary': Textsuccess;
  'icon-on-subtle': Textsuccess;
  'icon-primary-hover': Textsuccess;
  'icon-primary-disabled': Textsuccess;
  'icon-primary-active': Textsuccess;
  'icon-on-invert': Textsuccess;
  'icon-on-input': Textsuccess;
  'icon-on-image': Textsuccess;
  'icon-rating': Textsuccess;
  'icon-error-on-primary': Textsuccess;
}
interface Background {
  'bg-success': Textsuccess;
  'bg-body': Textsuccess;
  'bg-success-hover': Textsuccess;
  'bg-primary': Textsuccess;
  'bg-primary-hover': Textsuccess;
  'bg-page': Textsuccess;
  'bg-subtle': Textsuccess;
  'bg-error': Textsuccess;
  'bg-error-hover': Textsuccess;
  'bg-warning': Textsuccess;
  'bg-warning-hover': Textsuccess;
  'bg-info': Textsuccess;
  'bg-info-hover': Textsuccess;
  'bg-input': Textsuccess;
  'bg-input-hover': Textsuccess;
  'bg-input-focus': Textsuccess;
  'bg-strong': Textsuccess;
  'bg-primary-active': Textsuccess;
  'bg-primary-disabled': Textsuccess;
  'bg-surface': Textsuccess;
  'bg-surface-invert': Textsuccess;
  'bg-primary-subtle': Textsuccess;
  'bg-primary-subtle-hover': Textsuccess;
  'bg-primary-muted': Textsuccess;
  'bg-muted': Textsuccess;
  'bg-input-disabled': Textsuccess;
  'bg-success-muted': Textsuccess;
  'bg-warning-muted': Textsuccess;
  'bg-error-muted': Textsuccess;
  'bg-info-muted': Textsuccess;
  'bg-surface-raised': Textsuccess;
}
interface Text {
  'text-success': Textsuccess;
  'text-body': Textsuccess;
  'text-error': Textsuccess;
  'text-warning': Textsuccess;
  'text-info': Textsuccess;
  'text-secondary': Textsuccess;
  'text-subtle': Textsuccess;
  'text-inactive': Textsuccess;
  'text-primary': Textsuccess;
  'text-primary-hover': Textsuccess;
  'text-primary-link': Textsuccess;
  'text-primary-link-hover': Textsuccess;
  'text-input': Textsuccess;
  'text-input-hover': Textsuccess;
  'text-input-focus': Textsuccess;
  'text-muted': Textsuccess;
  'text-on-primary': Textsuccess;
  'text-on-subtle': Textsuccess;
  'text-primary-disabled': Textsuccess;
  'text-primary-active': Textsuccess;
  'text-on-image': Textsuccess;
  'text-on-invert': Textsuccess;
  'text-error-on-primary': Textsuccess;
}
interface Textsuccess {
  '$type': string;
  '$value': string;
  '$description': string;
  '$extensions': Extensions2;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes3;
  path: string[];
}
interface Original2 {
  '$type': string;
  '$value': string;
  '$description': string;
  '$extensions': Extensions2;
}
interface Extensions2 {
  mode: Mode2;
  figma: Figma;
}
interface Mode2 {
  'Mode B - Light': string;
  'Mode B - Dark': string;
  'Mode A - Light': string;
  'Mode A - Dark': string;
}
interface _00Primitives {
  Black: Black;
  White: Black;
  Bliggit: Bliggit;
  Red: Red;
  Yelllow: Red;
  Green: Red;
  Blue: Red;
  Transparent: Black;
}
interface Red {
  '50': _502;
  '100': _502;
  '200': _502;
  '300': _502;
  '400': _502;
  '500': _502;
  '600': _502;
  '700': _502;
  '800': _502;
  '900': _502;
}
interface _502 {
  '$type': string;
  '$value': string;
  '$description': string;
  '$extensions': Extensions;
  filePath: string;
  isSource: boolean;
  original: Original;
  name: string;
  attributes: Attributes3;
  path: string[];
}
interface Attributes3 {
  category: string;
  type: string;
  item: string;
}
interface Bliggit {
  Neutral: Neutral;
  'Black Alpha': Neutral;
  'White Alpha': Neutral;
  'Blip Blue': Neutral;
  Zitronengelb: Neutral;
  Grasgruen: Neutral;
  Wald: Neutral;
  Blau: Neutral;
  Rose: Neutral;
  Fuchsia: Neutral;
  Lila: Neutral;
  Blutorange: Neutral;
  Honiggelb: Neutral;
  Tuerkis: Neutral;
  Hellblau: Neutral;
}
interface Neutral {
  '50': _50;
  '100': _50;
  '200': _50;
  '300': _50;
  '400': _50;
  '500': _50;
  '600': _50;
  '700': _50;
  '800': _50;
  '900': _50;
}
interface _50 {
  '$type': string;
  '$value': string;
  '$description': string;
  '$extensions': Extensions;
  filePath: string;
  isSource: boolean;
  original: Original;
  name: string;
  attributes: Attributes2;
  path: string[];
}
interface Attributes2 {
  category: string;
  type: string;
  item: string;
  subitem: string;
}
interface Black {
  '$type': string;
  '$value': string;
  '$description': string;
  '$extensions': Extensions;
  filePath: string;
  isSource: boolean;
  original: Original;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Attributes {
  category: string;
  type: string;
}
interface Original {
  '$type': string;
  '$value': string;
  '$description': string;
  '$extensions': Extensions;
}
interface Extensions {
  mode: Mode;
  figma: Figma;
}
interface Figma {
  variableId: string;
  collection: Collection;
}
interface Collection {
  id: string;
  name: string;
  defaultModeId: string;
}
interface Mode {
}