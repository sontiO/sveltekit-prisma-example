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
					$components: path.resolve('./src/components')
				}
			}
		}
	}
};

export default config;
