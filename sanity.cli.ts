// # Sanity CLI #

import { defineCliConfig } from 'sanity/cli';
import { projectId, dataset } from './sanity/config/env';

const config = defineCliConfig({
    api: {
        projectId,
        dataset
    }
});

export default config;
