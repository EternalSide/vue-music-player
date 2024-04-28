import {fileURLToPath, URL} from "node:url";
import path from "path";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			// "@": path.resolve(__dirname, "./src"),
		},
	},
	css: {
		postcss: {
			plugins: [tailwind(), autoprefixer()],
		},
	},
});
