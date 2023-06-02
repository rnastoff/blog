import { request, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getPreviewPosts = async () => {
  const query = gql`
    query GetPreviewPosts  {
      postsConnection (first: 100) {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
}




export const getPost = async (slug) => {
  const query = gql`
    query GetPost($slug: String!) {
      post(where: {slug: $slug}) {
        createdAt
        slug
        title
        content {
          html
        }
        categories {
          name
          slug
        }
      }
    }        
  `

  const result = await request(graphqlAPI, query, { slug });
  return result.post;
}



export const getCategoryPosts = async (slug) => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      posts(where: {categories_some: {slug: $slug}}) {
        slug
        title
        createdAt
        excerpt
        categories {
          name
          slug
        }
      }
   }
  `
  const result = await request(graphqlAPI, query, { slug });
  return result.posts;
}



export const getCategories = async () => {
  const query = gql`
    query GetCategories() {
      categories {
        name
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query);
  return result;
}



export const submitComment = async (obj) => {
  //This request goes to our own backend
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  });

  return result.json();
}


export const getComments = async (slug) => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      comments(where: { post: { slug: $slug }}) {
        name
        createdAt
        comment
      }
   }
  `
  const result = await request(graphqlAPI, query, { slug });
  return result.comments;
}