import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			main: string;
			secondary: string;
			selected: string;
			hover: string;
			text: string;
			light: string;
			even: string;
			odd: string;
			error: string;
		};
	}
}
