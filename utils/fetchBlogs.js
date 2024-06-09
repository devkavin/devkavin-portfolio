import { GraphQLClient } from 'graphql-request';
import { GET_BLOGS } from './graphql';

const client = new GraphQLClient('https://gql.hashnode.com/');

export async function getBlogs() {
  try {
    const data = await client.request(GET_BLOGS);
    return data.publication.posts.edges.map(edge => edge.node);
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw new Error('Failed to fetch data');
  }
}