import { join } from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: join(process.cwd(), 'src/routes/blog/_post.svelte'),
			}
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
