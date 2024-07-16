export const accentColorsArray = [
    "blau",
    "blutorange",
    "fuchsia",
    "grasgruen",
    "lila",
    "turkis",
  ] as const;
  export type AccentColor = (typeof accentColorsArray)[number];
  
  const themes = {
    blau: {
      dark: {
        bg: {
          body: "#131313",
          error: "#f87171",
          errorHover: "#fca5a5",
          errorMuted: "#f87171",
          info: "#bfdbfe",
          infoHover: "#93c5fd",
          infoMuted: "#60a5fa",
          input: "#ffffff",
          inputDisabled: "#e5e5e5",
          inputFocus: "#ffffff",
          inputHover: "#e5e5e5",
          muted: "#a3a3a3",
          page: "#262626",
          primary: "#00598d",
          primaryActive: "#0067a3",
          primaryDisabled: "#e4eaf2",
          primaryHover: "#0067a3",
          primaryMuted: "#729ac7",
          primarySubtle: "#729ac7",
          primarySubtleHover: "#0073b6",
          strong: "#737373",
          subtle: "#d4d4d4",
          success: "#4ade80",
          successHover: "#86efac",
          successMuted: "#4ade80",
          surface: "#171717",
          surfaceInvert: "#f5f5f5",
          surfaceRaised: "#262626",
          warning: "#facc15",
          warningHover: "#fde047",
          warningMuted: "#facc15",
        },
        border: {
          container: "#737373",
          error: "#dc2626",
          inactive: "#404040",
          info: "#2563eb",
          input: "#e5e5e5",
          inputDisabled: "#a3a3a3",
          inputFocus: "#0073b6",
          inputHover: "#d4d4d4",
          primary: "#c6d2e5",
          primaryActive: "#0073b6",
          primaryDisabled: "#c6d2e5",
          primaryFocus: "#729ac7",
          primaryHover: "#a1b8d6",
          primarySubtle: "#729ac7",
          primarySubtleHover: "#0073b6",
          strong: "#737373",
          subtle: "#262626",
          success: "#16a34a",
          warning: "#ca8a04",
        },
        icon: {
          default: "#ffffff",
          error: "#dc2626",
          inactive: "#a3a3a3",
          info: "#bfdbfe",
          muted: "#737373",
          neutral: "#ffffff",
          onImage: "#ffffff",
          onInput: "#171717",
          onInvert: "#171717",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#c6d2e5",
          primaryActive: "#0073b6",
          primaryDisabled: "#c6d2e5",
          primaryHover: "#a1b8d6",
          success: "#16a34a",
          warning: "#ca8a04",
        },
        text: {
          body: "#fafafa",
          error: "#dc2626",
          inactive: "#a3a3a3",
          info: "#bfdbfe",
          input: "#737373",
          inputFocus: "#171717",
          inputHover: "#525252",
          muted: "#a3a3a3",
          onImage: "#ffffff",
          onInvert: "#171717",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#c6d2e5",
          primaryActive: "#f2f5f9",
          primaryDisabled: "#c6d2e5",
          primaryHover: "#a1b8d6",
          primaryLink: "#c6d2e5",
          primaryLinkHover: "#a1b8d6",
          secondary: "#e5e5e5",
          subtle: "#d4d4d4",
          success: "#16a34a",
          warning: "#ca8a04",
        },
      },
      light: {
        bg: {
          body: "#ffffff",
          error: "#ef4444",
          errorHover: "#dc2626",
          errorMuted: "#fecaca",
          info: "#3b82f6",
          infoHover: "#2563eb",
          infoMuted: "#bfdbfe",
          input: "#ffffff",
          inputDisabled: "#f5f5f5",
          inputFocus: "#ffffff",
          inputHover: "#f5f5f5",
          muted: "#e5e5e5",
          page: "#ffffff",
          primary: "#0073b6",
          primaryActive: "#0067a3",
          primaryDisabled: "#e4eaf2",
          primaryHover: "#004973",
          primaryMuted: "#f2f5f9",
          primarySubtle: "#729ac7",
          primarySubtleHover: "#0067a3",
          strong: "#171717",
          subtle: "#f5f5f5",
          success: "#22c55e",
          successHover: "#16a34a",
          successMuted: "#bbf7d0",
          surface: "#f5f5f5",
          surfaceInvert: "#171717",
          surfaceRaised: "#171717",
          warning: "#eab308",
          warningHover: "#ca8a04",
          warningMuted: "#fef08a",
        },
        border: {
          container: "#a3a3a3",
          error: "#f87171",
          inactive: "#d4d4d4",
          info: "#60a5fa",
          input: "#d4d4d4",
          inputDisabled: "#d4d4d4",
          inputFocus: "#c6d2e5",
          inputHover: "#a3a3a3",
          primary: "#0073b6",
          primaryActive: "#00598d",
          primaryDisabled: "#e4eaf2",
          primaryFocus: "#a1b8d6",
          primaryHover: "#00598d",
          primarySubtle: "#729ac7",
          primarySubtleHover: "#0067a3",
          strong: "#171717",
          subtle: "#f5f5f5",
          success: "#4ade80",
          warning: "#facc15",
        },
        icon: {
          default: "#171717",
          error: "#ef4444",
          inactive: "#d4d4d4",
          info: "#3b82f6",
          muted: "#737373",
          neutral: "#ffffff",
          onImage: "#ffffff",
          onInput: "#171717",
          onInvert: "#e5e5e5",
          onPrimary: "#ffffff",
          onSubtle: "#404040",
          primary: "#0073b6",
          primaryActive: "#00598d",
          primaryDisabled: "#c6d2e5",
          primaryHover: "#00598d",
          success: "#22c55e",
          warning: "#eab308",
        },
        text: {
          body: "#171717",
          error: "#ef4444",
          inactive: "#d4d4d4",
          info: "#3b82f6",
          input: "#737373",
          inputFocus: "#171717",
          inputHover: "#525252",
          muted: "#a3a3a3",
          onImage: "#ffffff",
          onInvert: "#ffffff",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#0073b6",
          primaryActive: "#00598d",
          primaryDisabled: "#c6d2e5",
          primaryHover: "#00598d",
          primaryLink: "#0073b6",
          primaryLinkHover: "#0067a3",
          secondary: "#262626",
          subtle: "#525252",
          success: "#22c55e",
          warning: "#eab308",
        },
      },
    },
    blutorange: {
      dark: {
        bg: {
          body: "#131313",
          error: "#f87171",
          errorHover: "#fca5a5",
          errorMuted: "#f87171",
          info: "#bfdbfe",
          infoHover: "#93c5fd",
          infoMuted: "#60a5fa",
          input: "#ffffff",
          inputDisabled: "#e5e5e5",
          inputFocus: "#ffffff",
          inputHover: "#e5e5e5",
          muted: "#a3a3a3",
          page: "#262626",
          primary: "#b94228",
          primaryActive: "#d64c2f",
          primaryDisabled: "#fce7e5",
          primaryHover: "#d64c2f",
          primaryMuted: "#f2897b",
          primarySubtle: "#f2897b",
          primarySubtleHover: "#ef5534",
          strong: "#737373",
          subtle: "#d4d4d4",
          success: "#4ade80",
          successHover: "#86efac",
          successMuted: "#4ade80",
          surface: "#171717",
          surfaceInvert: "#f5f5f5",
          surfaceRaised: "#262626",
          warning: "#facc15",
          warningHover: "#fde047",
          warningMuted: "#facc15",
        },
        border: {
          container: "#737373",
          error: "#dc2626",
          inactive: "#404040",
          info: "#2563eb",
          input: "#e5e5e5",
          inputDisabled: "#a3a3a3",
          inputFocus: "#ef5534",
          inputHover: "#d4d4d4",
          primary: "#f9cdc8",
          primaryActive: "#ef5534",
          primaryDisabled: "#f9cdc8",
          primaryFocus: "#f2897b",
          primaryHover: "#f6aea6",
          primarySubtle: "#f2897b",
          primarySubtleHover: "#ef5534",
          strong: "#737373",
          subtle: "#262626",
          success: "#16a34a",
          warning: "#ca8a04",
        },
        icon: {
          default: "#ffffff",
          error: "#dc2626",
          inactive: "#a3a3a3",
          info: "#bfdbfe",
          muted: "#737373",
          neutral: "#ffffff",
          onImage: "#ffffff",
          onInput: "#171717",
          onInvert: "#171717",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#f9cdc8",
          primaryActive: "#ef5534",
          primaryDisabled: "#f9cdc8",
          primaryHover: "#f6aea6",
          success: "#16a34a",
          warning: "#ca8a04",
        },
        text: {
          body: "#fafafa",
          error: "#dc2626",
          inactive: "#a3a3a3",
          info: "#bfdbfe",
          input: "#737373",
          inputFocus: "#171717",
          inputHover: "#525252",
          muted: "#a3a3a3",
          onImage: "#ffffff",
          onInvert: "#171717",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#f9cdc8",
          primaryActive: "#fdf3f2",
          primaryDisabled: "#f9cdc8",
          primaryHover: "#f6aea6",
          primaryLink: "#f9cdc8",
          primaryLinkHover: "#f6aea6",
          secondary: "#e5e5e5",
          subtle: "#d4d4d4",
          success: "#16a34a",
          warning: "#ca8a04",
        },
      },
      light: {
        bg: {
          body: "#ffffff",
          error: "#ef4444",
          errorHover: "#dc2626",
          errorMuted: "#fecaca",
          info: "#3b82f6",
          infoHover: "#2563eb",
          infoMuted: "#bfdbfe",
          input: "#ffffff",
          inputDisabled: "#f5f5f5",
          inputFocus: "#ffffff",
          inputHover: "#f5f5f5",
          muted: "#e5e5e5",
          page: "#ffffff",
          primary: "#ef5534",
          primaryActive: "#d64c2f",
          primaryDisabled: "#fce7e5",
          primaryHover: "#973621",
          primaryMuted: "#fdf3f2",
          primarySubtle: "#f2897b",
          primarySubtleHover: "#d64c2f",
          strong: "#171717",
          subtle: "#f5f5f5",
          success: "#22c55e",
          successHover: "#16a34a",
          successMuted: "#bbf7d0",
          surface: "#f5f5f5",
          surfaceInvert: "#171717",
          surfaceRaised: "#171717",
          warning: "#eab308",
          warningHover: "#ca8a04",
          warningMuted: "#fef08a",
        },
        border: {
          container: "#a3a3a3",
          error: "#f87171",
          inactive: "#d4d4d4",
          info: "#60a5fa",
          input: "#d4d4d4",
          inputDisabled: "#d4d4d4",
          inputFocus: "#f9cdc8",
          inputHover: "#a3a3a3",
          primary: "#ef5534",
          primaryActive: "#b94228",
          primaryDisabled: "#fce7e5",
          primaryFocus: "#f6aea6",
          primaryHover: "#b94228",
          primarySubtle: "#f2897b",
          primarySubtleHover: "#d64c2f",
          strong: "#171717",
          subtle: "#f5f5f5",
          success: "#4ade80",
          warning: "#facc15",
        },
        icon: {
          default: "#171717",
          error: "#ef4444",
          inactive: "#d4d4d4",
          info: "#3b82f6",
          muted: "#737373",
          neutral: "#ffffff",
          onImage: "#ffffff",
          onInput: "#171717",
          onInvert: "#e5e5e5",
          onPrimary: "#ffffff",
          onSubtle: "#404040",
          primary: "#ef5534",
          primaryActive: "#b94228",
          primaryDisabled: "#f9cdc8",
          primaryHover: "#b94228",
          success: "#22c55e",
          warning: "#eab308",
        },
        text: {
          body: "#171717",
          error: "#ef4444",
          inactive: "#d4d4d4",
          info: "#3b82f6",
          input: "#737373",
          inputFocus: "#171717",
          inputHover: "#525252",
          muted: "#a3a3a3",
          onImage: "#ffffff",
          onInvert: "#ffffff",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#ef5534",
          primaryActive: "#b94228",
          primaryDisabled: "#f9cdc8",
          primaryHover: "#b94228",
          primaryLink: "#ef5534",
          primaryLinkHover: "#d64c2f",
          secondary: "#262626",
          subtle: "#525252",
          success: "#22c55e",
          warning: "#eab308",
        },
      },
    },
    fuchsia: {
      dark: {
        bg: {
          body: "#131313",
          error: "#f87171",
          errorHover: "#fca5a5",
          errorMuted: "#f87171",
          info: "#bfdbfe",
          infoHover: "#93c5fd",
          infoMuted: "#60a5fa",
          input: "#ffffff",
          inputDisabled: "#e5e5e5",
          inputFocus: "#ffffff",
          inputHover: "#e5e5e5",
          muted: "#a3a3a3",
          page: "#262626",
          primary: "#b82c4f",
          primaryActive: "#d4335b",
          primaryDisabled: "#fce5e9",
          primaryHover: "#d4335b",
          primaryMuted: "#f17d92",
          primarySubtle: "#f17d92",
          primarySubtleHover: "#ed3966",
          strong: "#737373",
          subtle: "#d4d4d4",
          success: "#4ade80",
          successHover: "#86efac",
          successMuted: "#4ade80",
          surface: "#171717",
          surfaceInvert: "#f5f5f5",
          surfaceRaised: "#262626",
          warning: "#facc15",
          warningHover: "#fde047",
          warningMuted: "#facc15",
        },
        border: {
          container: "#737373",
          error: "#dc2626",
          inactive: "#404040",
          info: "#2563eb",
          input: "#e5e5e5",
          inputDisabled: "#a3a3a3",
          inputFocus: "#ed3966",
          inputHover: "#d4d4d4",
          primary: "#f8c9d0",
          primaryActive: "#ed3966",
          primaryDisabled: "#f8c9d0",
          primaryFocus: "#f17d92",
          primaryHover: "#f4a7b4",
          primarySubtle: "#f17d92",
          primarySubtleHover: "#ed3966",
          strong: "#737373",
          subtle: "#262626",
          success: "#16a34a",
          warning: "#ca8a04",
        },
        icon: {
          default: "#ffffff",
          error: "#dc2626",
          inactive: "#a3a3a3",
          info: "#bfdbfe",
          muted: "#737373",
          neutral: "#ffffff",
          onImage: "#ffffff",
          onInput: "#171717",
          onInvert: "#171717",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#f8c9d0",
          primaryActive: "#ed3966",
          primaryDisabled: "#f8c9d0",
          primaryHover: "#f4a7b4",
          success: "#16a34a",
          warning: "#ca8a04",
        },
        text: {
          body: "#fafafa",
          error: "#dc2626",
          inactive: "#a3a3a3",
          info: "#bfdbfe",
          input: "#737373",
          inputFocus: "#171717",
          inputHover: "#525252",
          muted: "#a3a3a3",
          onImage: "#ffffff",
          onInvert: "#171717",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#f8c9d0",
          primaryActive: "#fdf3f4",
          primaryDisabled: "#f8c9d0",
          primaryHover: "#f4a7b4",
          primaryLink: "#f8c9d0",
          primaryLinkHover: "#f4a7b4",
          secondary: "#e5e5e5",
          subtle: "#d4d4d4",
          success: "#16a34a",
          warning: "#ca8a04",
        },
      },
      light: {
        bg: {
          body: "#ffffff",
          error: "#ef4444",
          errorHover: "#dc2626",
          errorMuted: "#fecaca",
          info: "#3b82f6",
          infoHover: "#2563eb",
          infoMuted: "#bfdbfe",
          input: "#ffffff",
          inputDisabled: "#f5f5f5",
          inputFocus: "#ffffff",
          inputHover: "#f5f5f5",
          muted: "#e5e5e5",
          page: "#ffffff",
          primary: "#ed3966",
          primaryActive: "#d4335b",
          primaryDisabled: "#fce5e9",
          primaryHover: "#962441",
          primaryMuted: "#f7fbf2",
          primarySubtle: "#f17d92",
          primarySubtleHover: "#d4335b",
          strong: "#171717",
          subtle: "#f5f5f5",
          success: "#22c55e",
          successHover: "#16a34a",
          successMuted: "#bbf7d0",
          surface: "#f5f5f5",
          surfaceInvert: "#171717",
          surfaceRaised: "#171717",
          warning: "#eab308",
          warningHover: "#ca8a04",
          warningMuted: "#fef08a",
        },
        border: {
          container: "#a3a3a3",
          error: "#f87171",
          inactive: "#d4d4d4",
          info: "#60a5fa",
          input: "#d4d4d4",
          inputDisabled: "#d4d4d4",
          inputFocus: "#f8c9d0",
          inputHover: "#a3a3a3",
          primary: "#ed3966",
          primaryActive: "#b82c4f",
          primaryDisabled: "#fce5e9",
          primaryFocus: "#f4a7b4",
          primaryHover: "#b82c4f",
          primarySubtle: "#f17d92",
          primarySubtleHover: "#d4335b",
          strong: "#171717",
          subtle: "#f5f5f5",
          success: "#4ade80",
          warning: "#facc15",
        },
        icon: {
          default: "#171717",
          error: "#ef4444",
          inactive: "#d4d4d4",
          info: "#3b82f6",
          muted: "#737373",
          neutral: "#ffffff",
          onImage: "#ffffff",
          onInput: "#171717",
          onInvert: "#e5e5e5",
          onPrimary: "#ffffff",
          onSubtle: "#404040",
          primary: "#ed3966",
          primaryActive: "#b82c4f",
          primaryDisabled: "#f8c9d0",
          primaryHover: "#b82c4f",
          success: "#22c55e",
          warning: "#eab308",
        },
        text: {
          body: "#171717",
          error: "#ef4444",
          inactive: "#d4d4d4",
          info: "#3b82f6",
          input: "#737373",
          inputFocus: "#171717",
          inputHover: "#525252",
          muted: "#a3a3a3",
          onImage: "#ffffff",
          onInvert: "#ffffff",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#ed3966",
          primaryActive: "#b82c4f",
          primaryDisabled: "#f8c9d0",
          primaryHover: "#b82c4f",
          primaryLink: "#ed3966",
          primaryLinkHover: "#d4335b",
          secondary: "#262626",
          subtle: "#525252",
          success: "#22c55e",
          warning: "#eab308",
        },
      },
    },
    grasgruen: {
      dark: {
        bg: {
          body: "#131313",
          error: "#f87171",
          errorHover: "#fca5a5",
          errorMuted: "#f87171",
          info: "#bfdbfe",
          infoHover: "#93c5fd",
          infoMuted: "#60a5fa",
          input: "#ffffff",
          inputDisabled: "#e5e5e5",
          inputFocus: "#ffffff",
          inputHover: "#e5e5e5",
          muted: "#a3a3a3",
          page: "#262626",
          primary: "#91bb0b",
          primaryActive: "#a2d10c",
          primaryDisabled: "#f7fbf2",
          primaryHover: "#a2d10c",
          primaryMuted: "#cce5a2",
          primarySubtle: "#cce5a2",
          primarySubtleHover: "#b8db73",
          strong: "#737373",
          subtle: "#d4d4d4",
          success: "#4ade80",
          successHover: "#86efac",
          successMuted: "#4ade80",
          surface: "#404040",
          surfaceInvert: "#f5f5f5",
          surfaceRaised: "#262626",
          warning: "#facc15",
          warningHover: "#fde047",
          warningMuted: "#facc15",
        },
        border: {
          container: "#737373",
          error: "#dc2626",
          inactive: "#404040",
          info: "#2563eb",
          input: "#e5e5e5",
          inputDisabled: "#a3a3a3",
          inputFocus: "#b8db73",
          inputHover: "#d4d4d4",
          primary: "#cce5a2",
          primaryActive: "#a2d10c",
          primaryDisabled: "#eff6e4",
          primaryFocus: "#dfeec6",
          primaryHover: "#dfeec6",
          primarySubtle: "#a2d10c",
          primarySubtleHover: "#91bb0b",
          strong: "#f5f5f5",
          subtle: "#262626",
          success: "#16a34a",
          warning: "#ca8a04",
        },
        icon: {
          default: "#ffffff",
          error: "#dc2626",
          inactive: "#a3a3a3",
          info: "#bfdbfe",
          muted: "#d4d4d4",
          neutral: "#ffffff",
          onImage: "#ffffff",
          onInput: "#171717",
          onInvert: "#171717",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#cce5a2",
          primaryActive: "#a2d10c",
          primaryDisabled: "#dfeec6",
          primaryHover: "#b8db73",
          rating: "#feedc6",
          success: "#16a34a",
          warning: "#ca8a04",
        },
        text: {
          body: "#fafafa",
          error: "#dc2626",
          inactive: "#a3a3a3",
          info: "#bfdbfe",
          input: "#737373",
          inputFocus: "#171717",
          inputHover: "#525252",
          muted: "#a3a3a3",
          onImage: "#ffffff",
          onInvert: "#171717",
          onPrimary: "#131313",
          onSubtle: "#171717",
          primary: "#eff6e4",
          primaryActive: "#f7fbf2",
          primaryDisabled: "#eff6e4",
          primaryHover: "#dfeec6",
          primaryLink: "#eff6e4",
          primaryLinkHover: "#dfeec6",
          secondary: "#e5e5e5",
          subtle: "#d4d4d4",
          success: "#16a34a",
          warning: "#ca8a04",
        },
      },
      light: {
        bg: {
          body: "#ffffff",
          error: "#ef4444",
          errorHover: "#dc2626",
          errorMuted: "#fecaca",
          info: "#3b82f6",
          infoHover: "#2563eb",
          infoMuted: "#bfdbfe",
          input: "#ffffff",
          inputDisabled: "#f5f5f5",
          inputFocus: "#ffffff",
          inputHover: "#f5f5f5",
          muted: "#e5e5e5",
          page: "#ffffff",
          primary: "#91bb0b",
          primaryActive: "#668408",
          primaryDisabled: "#dfeec6",
          primaryHover: "#485d05",
          primaryMuted: "#eff6e4",
          primarySubtle: "#a2d10c",
          primarySubtleHover: "#7da209",
          strong: "#171717",
          subtle: "#f5f5f5",
          success: "#22c55e",
          successHover: "#16a34a",
          successMuted: "#bbf7d0",
          surface: "#f5f5f5",
          surfaceInvert: "#171717",
          surfaceRaised: "#171717",
          warning: "#eab308",
          warningHover: "#ca8a04",
          warningMuted: "#fef08a",
        },
        border: {
          container: "#a3a3a3",
          error: "#f87171",
          inactive: "#d4d4d4",
          info: "#60a5fa",
          input: "#d4d4d4",
          inputDisabled: "#d4d4d4",
          inputFocus: "#cce5a2",
          inputHover: "#a3a3a3",
          primary: "#91bb0b",
          primaryActive: "#668408",
          primaryDisabled: "#dfeec6",
          primaryFocus: "#b8db73",
          primaryHover: "#668408",
          primarySubtle: "#a2d10c",
          primarySubtleHover: "#7da209",
          strong: "#171717",
          subtle: "#f5f5f5",
          success: "#4ade80",
          warning: "#facc15",
        },
        icon: {
          default: "#171717",
          error: "#ef4444",
          inactive: "#d4d4d4",
          info: "#3b82f6",
          muted: "#737373",
          neutral: "#ffffff",
          onImage: "#ffffff",
          onInput: "#171717",
          onInvert: "#e5e5e5",
          onPrimary: "#ffffff",
          onSubtle: "#404040",
          primary: "#91bb0b",
          primaryActive: "#668408",
          primaryDisabled: "#cce5a2",
          primaryHover: "#668408",
          rating: "#fccf00",
          success: "#22c55e",
          warning: "#eab308",
        },
        text: {
          body: "#171717",
          error: "#ef4444",
          inactive: "#d4d4d4",
          info: "#3b82f6",
          input: "#737373",
          inputFocus: "#171717",
          inputHover: "#525252",
          muted: "#a3a3a3",
          onImage: "#ffffff",
          onInvert: "#ffffff",
          onPrimary: "#131313",
          onSubtle: "#171717",
          primary: "#91bb0b",
          primaryActive: "#668408",
          primaryDisabled: "#cce5a2",
          primaryHover: "#668408",
          primaryLink: "#91bb0b",
          primaryLinkHover: "#7da209",
          secondary: "#262626",
          subtle: "#525252",
          success: "#22c55e",
          warning: "#eab308",
        },
      },
    },
    lila: {
      dark: {
        bg: {
          body: "#131313",
          error: "#f87171",
          errorHover: "#fca5a5",
          errorMuted: "#f87171",
          info: "#bfdbfe",
          infoHover: "#93c5fd",
          infoMuted: "#60a5fa",
          input: "#ffffff",
          inputDisabled: "#e5e5e5",
          inputFocus: "#ffffff",
          inputHover: "#e5e5e5",
          muted: "#a3a3a3",
          page: "#262626",
          primary: "#6e318f",
          primaryActive: "#7f38a5",
          primaryDisabled: "#ede6f2",
          primaryHover: "#7f38a5",
          primaryMuted: "#ab7fc8",
          primarySubtle: "#ab7fc8",
          primarySubtleHover: "#8e3fb8",
          strong: "#737373",
          subtle: "#d4d4d4",
          success: "#4ade80",
          successHover: "#86efac",
          successMuted: "#4ade80",
          surface: "#404040",
          surfaceInvert: "#f5f5f5",
          surfaceRaised: "#262626",
          warning: "#facc15",
          warningHover: "#fde047",
          warningMuted: "#facc15",
        },
        border: {
          container: "#737373",
          error: "#dc2626",
          inactive: "#404040",
          info: "#2563eb",
          input: "#e5e5e5",
          inputDisabled: "#a3a3a3",
          inputFocus: "#8e3fb8",
          inputHover: "#d4d4d4",
          primary: "#d9cae5",
          primaryActive: "#8e3fb8",
          primaryDisabled: "#d9cae5",
          primaryFocus: "#ab7fc8",
          primaryHover: "#c3a8d7",
          primarySubtle: "#ab7fc8",
          primarySubtleHover: "#8e3fb8",
          strong: "#f5f5f5",
          subtle: "#262626",
          success: "#16a34a",
          warning: "#ca8a04",
        },
        icon: {
          default: "#ffffff",
          error: "#dc2626",
          inactive: "#a3a3a3",
          info: "#bfdbfe",
          muted: "#d4d4d4",
          neutral: "#ffffff",
          onImage: "#ffffff",
          onInput: "#171717",
          onInvert: "#171717",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#d9cae5",
          primaryActive: "#8e3fb8",
          primaryDisabled: "#d9cae5",
          primaryHover: "#c3a8d7",
          rating: "#feedc6",
          success: "#16a34a",
          warning: "#ca8a04",
        },
        text: {
          body: "#fafafa",
          error: "#dc2626",
          inactive: "#a3a3a3",
          info: "#bfdbfe",
          input: "#737373",
          inputFocus: "#171717",
          inputHover: "#525252",
          muted: "#a3a3a3",
          onImage: "#ffffff",
          onInvert: "#171717",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#d9cae5",
          primaryActive: "#f6f3f9",
          primaryDisabled: "#d9cae5",
          primaryHover: "#c3a8d7",
          primaryLink: "#d9cae5",
          primaryLinkHover: "#c3a8d7",
          secondary: "#e5e5e5",
          subtle: "#d4d4d4",
          success: "#16a34a",
          warning: "#ca8a04",
        },
      },
      light: {
        bg: {
          body: "#ffffff",
          error: "#ef4444",
          errorHover: "#dc2626",
          errorMuted: "#fecaca",
          info: "#3b82f6",
          infoHover: "#2563eb",
          infoMuted: "#bfdbfe",
          input: "#ffffff",
          inputDisabled: "#f5f5f5",
          inputFocus: "#ffffff",
          inputHover: "#f5f5f5",
          muted: "#e5e5e5",
          page: "#ffffff",
          primary: "#8e3fb8",
          primaryActive: "#7f38a5",
          primaryDisabled: "#ede6f2",
          primaryHover: "#5a2874",
          primaryMuted: "#f6f3f9",
          primarySubtle: "#ab7fc8",
          primarySubtleHover: "#7f38a5",
          strong: "#171717",
          subtle: "#f5f5f5",
          success: "#22c55e",
          successHover: "#16a34a",
          successMuted: "#bbf7d0",
          surface: "#f5f5f5",
          surfaceInvert: "#171717",
          surfaceRaised: "#171717",
          warning: "#eab308",
          warningHover: "#ca8a04",
          warningMuted: "#fef08a",
        },
        border: {
          container: "#a3a3a3",
          error: "#f87171",
          inactive: "#d4d4d4",
          info: "#60a5fa",
          input: "#d4d4d4",
          inputDisabled: "#d4d4d4",
          inputFocus: "#d9cae5",
          inputHover: "#a3a3a3",
          primary: "#8e3fb8",
          primaryActive: "#6e318f",
          primaryDisabled: "#ede6f2",
          primaryFocus: "#c3a8d7",
          primaryHover: "#6e318f",
          primarySubtle: "#ab7fc8",
          primarySubtleHover: "#7f38a5",
          strong: "#171717",
          subtle: "#f5f5f5",
          success: "#4ade80",
          warning: "#facc15",
        },
        icon: {
          default: "#171717",
          error: "#ef4444",
          inactive: "#d4d4d4",
          info: "#3b82f6",
          muted: "#737373",
          neutral: "#ffffff",
          onImage: "#ffffff",
          onInput: "#171717",
          onInvert: "#e5e5e5",
          onPrimary: "#ffffff",
          onSubtle: "#404040",
          primary: "#8e3fb8",
          primaryActive: "#6e318f",
          primaryDisabled: "#d9cae5",
          primaryHover: "#6e318f",
          rating: "#fccf00",
          success: "#22c55e",
          warning: "#eab308",
        },
        text: {
          body: "#171717",
          error: "#ef4444",
          inactive: "#d4d4d4",
          info: "#3b82f6",
          input: "#737373",
          inputFocus: "#171717",
          inputHover: "#525252",
          muted: "#a3a3a3",
          onImage: "#ffffff",
          onInvert: "#ffffff",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#8e3fb8",
          primaryActive: "#6e318f",
          primaryDisabled: "#d9cae5",
          primaryHover: "#6e318f",
          primaryLink: "#8e3fb8",
          primaryLinkHover: "#7f38a5",
          secondary: "#262626",
          subtle: "#525252",
          success: "#22c55e",
          warning: "#eab308",
        },
      },
    },
    turkis: {
      dark: {
        bg: {
          body: "#131313",
          error: "#f87171",
          errorHover: "#fca5a5",
          errorMuted: "#f87171",
          info: "#bfdbfe",
          infoHover: "#93c5fd",
          infoMuted: "#60a5fa",
          input: "#ffffff",
          inputDisabled: "#e5e5e5",
          inputFocus: "#ffffff",
          inputHover: "#e5e5e5",
          muted: "#a3a3a3",
          page: "#262626",
          primary: "#00a495",
          primaryActive: "#00b7a7",
          primaryDisabled: "#f2f9f8",
          primaryHover: "#00b7a7",
          primaryMuted: "#a1d7cf",
          primarySubtle: "#a1d7cf",
          primarySubtleHover: "#72c7bc",
          strong: "#737373",
          subtle: "#d4d4d4",
          success: "#4ade80",
          successHover: "#86efac",
          successMuted: "#4ade80",
          surface: "#171717",
          surfaceInvert: "#f5f5f5",
          surfaceRaised: "#262626",
          warning: "#facc15",
          warningHover: "#fde047",
          warningMuted: "#facc15",
        },
        border: {
          container: "#737373",
          error: "#dc2626",
          inactive: "#404040",
          info: "#2563eb",
          input: "#e5e5e5",
          inputDisabled: "#a3a3a3",
          inputFocus: "#72c7bc",
          inputHover: "#d4d4d4",
          primary: "#a1d7cf",
          primaryActive: "#00b7a7",
          primaryDisabled: "#e4f2f0",
          primaryFocus: "#c6e5e0",
          primaryHover: "#c6e5e0",
          primarySubtle: "#00b7a7",
          primarySubtleHover: "#00a495",
          strong: "#737373",
          subtle: "#262626",
          success: "#16a34a",
          warning: "#ca8a04",
        },
        icon: {
          default: "#ffffff",
          error: "#dc2626",
          inactive: "#a3a3a3",
          info: "#bfdbfe",
          muted: "#737373",
          neutral: "#ffffff",
          onImage: "#ffffff",
          onInput: "#171717",
          onInvert: "#171717",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#a1d7cf",
          primaryActive: "#00b7a7",
          primaryDisabled: "#c6e5e0",
          primaryHover: "#72c7bc",
          success: "#16a34a",
          warning: "#ca8a04",
        },
        text: {
          body: "#fafafa",
          error: "#dc2626",
          inactive: "#a3a3a3",
          info: "#bfdbfe",
          input: "#737373",
          inputFocus: "#171717",
          inputHover: "#525252",
          muted: "#a3a3a3",
          onImage: "#ffffff",
          onInvert: "#171717",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#e4f2f0",
          primaryActive: "#f2f9f8",
          primaryDisabled: "#e4f2f0",
          primaryHover: "#c6e5e0",
          primaryLink: "#e4f2f0",
          primaryLinkHover: "#c6e5e0",
          secondary: "#e5e5e5",
          subtle: "#d4d4d4",
          success: "#16a34a",
          warning: "#ca8a04",
        },
      },
      light: {
        bg: {
          body: "#ffffff",
          error: "#ef4444",
          errorHover: "#dc2626",
          errorMuted: "#fecaca",
          info: "#3b82f6",
          infoHover: "#2563eb",
          infoMuted: "#bfdbfe",
          input: "#ffffff",
          inputDisabled: "#f5f5f5",
          inputFocus: "#ffffff",
          inputHover: "#f5f5f5",
          muted: "#e5e5e5",
          page: "#ffffff",
          primary: "#00a495",
          primaryActive: "#008e81",
          primaryDisabled: "#c6e5e0",
          primaryHover: "#00524b",
          primaryMuted: "#e4f2f0",
          primarySubtle: "#00b7a7",
          primarySubtleHover: "#008e81",
          strong: "#171717",
          subtle: "#f5f5f5",
          success: "#22c55e",
          successHover: "#16a34a",
          successMuted: "#bbf7d0",
          surface: "#f5f5f5",
          surfaceInvert: "#171717",
          surfaceRaised: "#171717",
          warning: "#eab308",
          warningHover: "#ca8a04",
          warningMuted: "#fef08a",
        },
        border: {
          container: "#a3a3a3",
          error: "#f87171",
          inactive: "#d4d4d4",
          info: "#60a5fa",
          input: "#d4d4d4",
          inputDisabled: "#d4d4d4",
          inputFocus: "#a1d7cf",
          inputHover: "#a3a3a3",
          primary: "#00a495",
          primaryActive: "#00746a",
          primaryDisabled: "#c6e5e0",
          primaryFocus: "#72c7bc",
          primaryHover: "#00746a",
          primarySubtle: "#00b7a7",
          primarySubtleHover: "#008e81",
          strong: "#171717",
          subtle: "#f5f5f5",
          success: "#4ade80",
          warning: "#facc15",
        },
        icon: {
          default: "#171717",
          error: "#ef4444",
          inactive: "#d4d4d4",
          info: "#3b82f6",
          muted: "#737373",
          neutral: "#ffffff",
          onImage: "#ffffff",
          onInput: "#171717",
          onInvert: "#e5e5e5",
          onPrimary: "#ffffff",
          onSubtle: "#404040",
          primary: "#00a495",
          primaryActive: "#00746a",
          primaryDisabled: "#a1d7cf",
          primaryHover: "#00746a",
          success: "#22c55e",
          warning: "#eab308",
        },
        text: {
          body: "#171717",
          error: "#ef4444",
          inactive: "#d4d4d4",
          info: "#3b82f6",
          input: "#737373",
          inputFocus: "#171717",
          inputHover: "#525252",
          muted: "#a3a3a3",
          onImage: "#ffffff",
          onInvert: "#ffffff",
          onPrimary: "#ffffff",
          onSubtle: "#171717",
          primary: "#00a495",
          primaryActive: "#00746a",
          primaryDisabled: "#a1d7cf",
          primaryHover: "#00746a",
          primaryLink: "#00a495",
          primaryLinkHover: "#008e81",
          secondary: "#262626",
          subtle: "#525252",
          success: "#22c55e",
          warning: "#eab308",
        },
      },
    },
  };
  
  export type Colors = (typeof themes)[AccentColor]["dark" | "light"];
  
  export default themes;
  