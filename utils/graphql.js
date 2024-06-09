import { gql } from 'graphql-request';

export const GET_BLOGS = gql`
  query Publication {
    publication(host: "devkavin.hashnode.dev") {
      title
      posts(first: 10) {
        edges {
          node {
            title
            brief
            url
            readTimeInMinutes
            publishedAt
            coverImage {
              attribution
              photographer
              url
            }
            tags{
              name
            }
            reactionCount
            responseCount
            views
          }
        }
      }
    }
  }
`;
