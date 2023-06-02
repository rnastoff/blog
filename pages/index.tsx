import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import PostPreview from '../components/PostPreview';
import Pagination from '../components/Pagination';

import { getPreviewPosts } from '../services';
import { PostPreviews, PostPrev } from "../interfaces/postPreview";

import usePagination from '../hooks/usePagination';

export default function Home({ posts }: PostPreviews) {

  const allPosts = posts.reverse();
  console.log(allPosts);

  const {
    pageNumber,
    handlePageChange,
    hasNextButton,
    hasPreviousButton,
    currentPagePosts } = usePagination(allPosts);



  const postPreviews = currentPagePosts.map((post) => {
    return (
      <PostPreview
        categories={post.node.categories}
        date={post.node.createdAt}
        excerpt={post.node.excerpt}
        slug={post.node.slug}
        title={post.node.title}
        key={post.node.slug}
      />
    )
  })

  //6:29


  return (
    <div>
      <div className="postPreviews md:mt-8 mt-4 lg:w-[32rem] md:w-[32rem] w-[20rem] mb-32">
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
  const posts = (await getPreviewPosts()) || [];

  return {
    props: { posts }
  }
}