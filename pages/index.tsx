import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import PostPreview from '../components/PostPreview';
import Pagination from '../components/Pagination';

import { getPreviewPosts } from '../services';
import { PostPreviews, PostPrev } from "../interfaces/postPreview";

export default function Home({ posts }: PostPreviews) {

  const allPosts = posts.reverse();
  const postsPerPage = 2;
  const [pageNumber, setPageNumber] = useState(1);
  const [firstIndexCurrentPage, setFirstIndexCurrentPage] = useState(0);
  const [lastIndexCurrentPage, setLastIndexCurrentPage] = useState(postsPerPage);
  let curr = allPosts.slice(firstIndexCurrentPage, lastIndexCurrentPage);
  const [currentPagePosts, setCurrentPagePosts] = useState<PostPrev[]>(curr);

  const router = useRouter(); // need access to query params

  //get page number from router.query and set firstIndex, and lastIndex
  useEffect(() => {
    if (router.query.page) {
      setCurrentPagePosts(allPosts.slice(firstIndexCurrentPage, lastIndexCurrentPage));
    }
  }, [lastIndexCurrentPage]);

  const handlePageChange = (newPageNum: number) => {
    setPageNumber(newPageNum);
    router.query.page = newPageNum.toString();
    router.push(`/?page=${newPageNum}`, undefined, { shallow: true });
    setPageIndexes(newPageNum);
  }

  const setPageIndexes = (newPageNum: number) => {
    const firstIndex = (newPageNum - 1) * postsPerPage;
    const lastIndex = firstIndex + (postsPerPage);
    setFirstIndexCurrentPage(firstIndex);
    setLastIndexCurrentPage(lastIndex);
  }

  const hasNextButton = () => {
    console.log("Last index current page", lastIndexCurrentPage);
    console.log("all posts length", allPosts.length);

    return !(lastIndexCurrentPage - 1 === allPosts.length);
  }


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