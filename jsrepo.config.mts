import { defineConfig } from 'jsrepo';
import stripTypes from '@jsrepo/transform-javascript';

export default defineConfig({
    registries: [],
    paths: {
        component: './src/components',
    },
	transforms: [stripTypes()]
});