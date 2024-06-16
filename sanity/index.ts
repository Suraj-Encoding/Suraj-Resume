// # Root Schema #

import { type SchemaTypeDefinition } from 'sanity';
import User from './schema/user';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [User]
};

export default schema;
