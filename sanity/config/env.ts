// # Sanity Env #

// # Constants

const name = process.env.NEXT_PUBLIC_SANITY_PROJECT_NAME;

const title = process.env.NEXT_PUBLIC_SANITY_DESK_TITLE;

const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const useCdn = false;

const perspective = "published";

// # Function 
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}

// # Export 
export { name, title, projectId, dataset, apiVersion, useCdn, perspective };
