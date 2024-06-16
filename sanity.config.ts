// # Sanity Configuration #

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { name, title, projectId, dataset, apiVersion } from './sanity/config/env'
import schema from './sanity/index'

const config = defineConfig({
  name,
  title,

  projectId,
  dataset,

  apiVersion,
  basePath: '/admin',

  schema,

  plugins: [
    structureTool(),
    visionTool()
  ]
});

export default config;
