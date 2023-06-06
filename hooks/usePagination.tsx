
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { PostPrev } from "../interfaces/postPreview";

const usePagination = (allPosts: PostPrev[], query: string) => {
  const router = useRouter(); // need access to query params

  const postsPerPage = 6;
  const [pageNumber, setPageNumber] = useState(1);
  const [firstIndexCurrentPage, setFirstIndexCurrentPage] = useState(0);
  const [lastIndexCurrentPage, setLastIndexCurrentPage] = useState(postsPerPage);

  let current = allPosts.slice(firstIndexCurrentPage, lastIndexCurrentPage);
  const [currentPagePosts, setCurrentPagePosts] = useState<PostPrev[]>(current);


  const handlePageChange = (newPageNum: number) => {
    setPageNumber(newPageNum);
    router.query.page = newPageNum.toString();
    router.push(`/${query}?page=${newPageNum}`, undefined, { shallow: true });
    setPageIndexes(newPageNum);
  }

  const setPageIndexes = (newPageNum: number) => {
    const firstIndex = (newPageNum - 1) * postsPerPage;
    let lastIndex = 0;

    const postsLeft = allPosts.length - firstIndex;
    if (postsLeft > postsPerPage) lastIndex = firstIndex + 6;
    else lastIndex = allPosts.length;

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