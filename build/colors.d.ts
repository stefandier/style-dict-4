declare const root: RootObject
export default root
interface RootObject {
  color: Color;
  size: Size;
}
interface Size {
}
interface Color {
  Black: Black;
  White: Black;
  Bliggit: Bliggit;
  Red: Red;
  Yelllow: Red;
  Green: Red;
  Blue: Red;
  Text: Text;
  Background: Background;
  Icon: Icon;
  Border: Border;
  Effect: Effect;
  Transparent: Black;
  white: White;
  black: White;
  transparent: White;
}
interface White {
  'Mode B - Light': _502;
  'Mode B - Dark': _502;
  'Mode A - Light': _502;
  'Mode A - Dark': _502;
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
  '50': Primary0;
  '100': Primary0;
}
interface Gradient {
  'primary-0': Primary0;
  'primary-100': Primary0;
  'accent-0': Primary0;
  'accent-100': Primary0;
  Overlay: Overlay;
}
interface Overlay {
  'light-start': Primary0;
  'light-stop': Primary0;
  'dark-start': Primary0;
  'dark-stop': Primary0;
  'dark-start-fixed': Primary0;
  'dark-stop-fixed': Primary0;
}
interface Primary0 {
  'Mode B - Light': ModeBLight;
  'Mode B - Dark': ModeBLight;
  'Mode A - Light': ModeBLight;
  'Mode A - Dark': ModeBLight;
}
interface ModeBLight {
  value: string;
  comment: string;
  filePath: string;
  isSource: boolean;
  original: Original;
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
  'Mode B - Light': _50;
  'Mode B - Dark': _50;
  'Mode A - Light': _50;
  'Mode A - Dark': _50;
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
  value: string;
  comment: string;
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
  value: string;
  comment: string;
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
  value: string;
  comment: string;
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
  value: string;
  comment: string;
}