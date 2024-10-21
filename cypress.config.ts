import { defineConfig } from "cypress";

export default defineConfig({
	reporter: "cypress-mochawesome-reporter",
	reporterOptions: {
		charts: true,
		reportPageTitle: "AutomationTestingFlexiDevTS",
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: false,
	},
	video: false,
	e2e: {
		baseUrl: `https://practicesoftwaretesting.com`,
		setupNodeEvents(on) {
			// eslint-disable-next-line @typescript-eslint/no-require-imports
			require("cypress-mochawesome-reporter/plugin")(on);
		},
	},
});
