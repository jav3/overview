import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: null
		}),
		paths: {
			base: dev ? "" : "/overview",
		},
		prerender: {
			entries: []
		}
	}
};

export default config;