import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'c5v51glp',
  dataset: 'production',
  apiVersion: '2021-08-31',
  useCdn: 'true',
});
