import { defineConfig } from "@pandacss/dev";
import { breakpoints } from "./src/ui-lib/theme/breakpoints";
import { conditions } from "./src/ui-lib/theme/conditions";
import { globalCss } from "./src/ui-lib/theme/global-css";
import { keyframes } from "./src/ui-lib/theme/keyframes";
import { textStyles } from "./src/ui-lib/theme/text-styles";
import { tokens } from "./src/ui-lib/theme/tokens";

export default defineConfig({
	preflight: true,
	jsxFramework: "react",
	include: ["./src/**/*.{js,jsx,ts,tsx}"],
	outdir: "styled-system",
	theme: {
		extend: {
			breakpoints,
			keyframes,
			textStyles,
			tokens,
		},
	},
	conditions,
	globalCss,
});
