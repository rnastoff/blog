
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { PostPrev } from "../interfaces/postPreview";

const usePagination = (allPosts: PostPrev[]) => {
  const router = useRouter(); // need access to query params

  const postsPerPage = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const [firstIndexCurrentPage, setFirstIndexCurrentPage] = useState(0);
  const [lastIndexCurrentPage, setLastIndexCurrentPage] = useState(postsPerPage);
  let curr = allPosts.slice(firstIndexCurrentPage, lastIndexCurrentPage);
  const [currentPagePosts, setCurrentPagePosts] = useState<PostPrev[]>(curr);


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
    return !(lastIndexCurrentPage === allPosts.length);
  }

  const hasPreviousButton = () => {
    return pageNumber > 1;
  }

  useEffect(() => {
    if (router.query.page) {
      setCurrentPagePosts(allPosts.slice(firstIndexCurrentPage, lastIndexCurrentPage));
    }
  }, [lastIndexCurrentPage]);

  return { pageNumber, handlePageChange, hasNextButton, hasPreviousButton, currentPagePosts };
}

export default usePagination;