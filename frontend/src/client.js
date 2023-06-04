import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'yvj0kijk',
    dataset: 'production',
    apiVersion: '2022-07-01',
    useCdn: true,
    token: 'sk4k7eUqpwKdjTnIDCkSVclq2QtbtExLUTjU1y0JRxaYThle3zFpJFvrJhuFysPvC6fANDpamzkKhVpJF0SXAvRREOcUlYIp7J8RFRUVgWLrWtETroOJqVSQxA7pBrKci68XFBGbRWpmcgYNycssmpAJ7KTujgIe2xwSeuPsrOuOpe7bO6W0'
});

// TODO: projectId and token have to be somewhere else so it can't be accessed from the browser

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);