// # Sanity Client #

import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion, useCdn, perspective } from '../config/env';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective
});

export default client;
