import { useRouter } from 'next/router';

import Loader from '../../components/Loader';
import PostContent from '../../components/PostContent';
import CommentForm from '../../components/CommentForm';
import CommentGroup from '../../components/CommentGroup';

import { PostSlug } from "../../interfaces/postSlug";

import { getPost, getPreviewPosts } from "../../services/index";

const Post = ({ post }: { post: PostSlug }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Loader />
    )
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="lg:mt-8 mt-4 lg:w-[35rem] md:w-[32rem] w-[20rem]">
        <PostContent post={post} />
        <hr className="mt-6 border-primary" />
        <CommentForm slug={post.slug} />
        <hr className="md:mt-6 mt-6 border-primary" />
        <CommentGroup slug={post.slug} />
      </div>
    </div>
  )
}

export default Post;


//slug gets passed to graphQL to search for specific post
export async function getStaticProps({ params }: { params: { "slug": string } }) {
  const data = await getPost(params.slug);
  return {
    props: { post: data },
  }
}

//need paths for slug, fallback needs to be set to true, so posts aren't statically generated
export async function getStaticPaths({ params }: { params: { "slug": string } }) {
  const posts = await getPreviewPosts();
  let paths = posts.map(({ node: { slug } }: any) => ({ params: { slug } }));

  return {
    paths: paths,
    fallback: true
  }
}