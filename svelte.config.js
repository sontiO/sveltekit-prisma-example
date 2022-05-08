import adapter from '@sveltejs/adapter-vercel';
import path from 'path';

const config = {
	kit: {
		adapter: adapter(),
		methodOverride: { allowed: ['DELETE'] },
		vite: {
			resolve: {
				alias: {
					$root: path.resolve('./src'),
					$lib: path.resolve('./lib'),
					$components: path.resolve('./src/components')
				}
			}
		}
	}
};

export default config;
