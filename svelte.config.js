import adapter from '@sveltejs/adapter-auto';
import path from 'path';

const config = {
	kit: {
		adapter: adapter(),
		methodOverride: { allowed: ['DELETE'] },
		vite: {
			resolve: {
				alias: {
					$root: path.resolve('src')
				}
			}
		}
	}
};

export default config;
