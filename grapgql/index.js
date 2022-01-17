import { request, gql } from 'graphql-request'

const graphQLAPI = process.env.GRAPHCMS_END_POINT

export async function getPosts() {
    const query = gql`
      query PostsQuery {
        postsConnection {
          edges {
            node {
              createdAt
              slug
              title
              excerpt
              featuredPost
              featuredImage {
                url
              }
              content {
                text
              }
              categories {
                name
                slug
              }
              author {
                bio
                name
                photo {
                  url
                }
              }
            }
          }
        }
      }
    `
    const result = await request(graphQLAPI, query)

    return result.postsConnection.edges

}
