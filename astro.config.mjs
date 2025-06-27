import { defineConfig } from 'astro/config';
import nekoweb from '@indiefellas/astro-adapter-nekoweb';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.pygora.nekoweb.org',
    outDir: 'dist/',
    adapter: nekoweb({       
        apiKey: '2441c8c5f1c4bfa4b7847604d203bdba836a01d0d4bf139a698fb09ba12786cf',
        cookie: '6719d393268d41ff2cbfd8c8bb3ea278d279fb1847fd03237b59219afca32a99',
        folder: 'dist'
    })
});
