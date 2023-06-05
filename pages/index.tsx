import { useEffect } from 'react';

import Header from '../components/Header';
import PostPreview from '../components/PostPreview';
import Pagination from '../components/Pagination';

import { getPreviewPosts } from '../services';
import { PostPreviews, PostPrev } from "../interfaces/postPreview";

import usePagination from '../hooks/usePagination';

import dummyData from '../dummy/dummyData';

export default function Home({ posts }: PostPreviews) {

  const query = "";

  const {
    pageNumber,
    handlePageChange,
    hasNextButton,
    hasPreviousButton,
    currentPagePosts } = usePagination(posts, query);


  const postPreviews = currentPagePosts.map((post) => {
    return (
      <PostPreview
        categories={post.categories}
        date={post.createdAt}
        excerpt={post.excerpt}
        slug={post.slug}
        title={post.title}
        key={post.slug}
      />
    )
  });


  // useEffect(() => {
  //   console.log("postPreviews:", postPreviews);
  // })


  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="postPreviews lg:w-[35rem] md:w-[32rem] w-[20rem] md:mt-8 mt-4 mb-32">
        {postPreviews}
        <Pagination
          pageNumber={pageNumber}
          onChange={handlePageChange}
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
    props: { posts }
  }

}