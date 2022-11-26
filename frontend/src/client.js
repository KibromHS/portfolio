import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '8cs1nceo',
    dataset: 'production',
    apiVersion: '2022-07-01',
    useCdn: true,
    token: 'sk6O6ufFPwdJwVJFWQ9xAXyW5HeznRzcYzFtz3VlSa9rBkpybL67oTjajpYOQXrEYJbJ9FSsPkltRfmcjW7alF2YIXlLAsRqSFqb7MP8J4e3QAmejBkjVqjLE8bl9xVT0tH0KuklPj0HbsjeXeqKXPCLPB7xyBm7z3tJZpygaicC8WA6iggG'
});

// TODO: projectId and token have to be somewhere else so it can't be accessed from the browser

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);