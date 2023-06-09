import { useRouter } from 'next/router';

import Loader from '../components/Loader';
import PostPreview from '../components/PostPreview';
import Pagination from '../components/Pagination';

import { getPreviewPosts } from '../services';
import { PostPreviews, PostPrev } from "../interfaces/postPreview";

import usePagination from '../hooks/usePagination';

import dummyData from '../dummy/dummyData';

export default function Home({ posts }: PostPreviews) {
  const router = useRouter();
  const slug = "";
  const pageNum = typeof router.query.page === 'string' ? parseInt(router.query.page) : 1;

  const {
    hasNextButton,
    hasPreviousButton,
    currentPagePosts } = usePagination(posts, slug, pageNum);

  const postPreviews = currentPagePosts.map((post) => {
    return (
      <PostPreview
        categories={post.categories}
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        slug={post.slug}
        title={post.title}
        key={post.slug}
      />
    )
  });


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="postPreviews lg:w-[35rem] md:w-[32rem] w-[20rem] md:mt-8 mt-4 mb-32">
        {/* <Loader /> */}
        {postPreviews}
        <Pagination
          hasNextButton={hasNextButton()}
          hasPreviousButton={hasPreviousButton()}
        />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  let posts = (await getPreviewPosts()) || [];
  posts = posts.reverse().map((post: { node: PostPrev }) => post.node);

  // let posts = dummyData; 

  return {
    props: { posts },
    revalidate: 1
  }
}