import PostContent from '../../components/PostContent';
import CommentForm from '../../components/CommentForm';
import CommentGroup from '../../components/CommentGroup';

import { PostSlug } from "../../interfaces/postSlug";

import { getPost, getPreviewPosts } from "../../services/index";

const Post = ({ post }: { post: PostSlug }) => {
  return (
    <div className="lg:mt-8 mt-4 lg:w-[32rem] md:w-[32rem] w-[20rem]">
      <PostContent post={post} />
      <hr className="mt-10 border-primary" />
      <CommentForm slug={post.slug} />
      <hr className="md:mt-12 mt-8 border-primary" />
      <CommentGroup slug={post.slug} />
    </div>
  )
}

export default Post;


//slug gets passed to graphQL to search for specific post
export async function getStaticProps({ params }: { params: { "slug": string } }) {
  const data = await getPost(params.slug);
  return {
    props: { post: data }
  }
}

//need paths for slug
export async function getStaticPaths({ params }: { params: { "slug": string } }) {
  const posts = await getPreviewPosts();
  let paths = posts.map(({ node: { slug } }: any) => ({ params: { slug } }));

  return {
    paths: paths,
    fallback: false
  }
}