import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { PostPrev } from "../interfaces/postPreview";

const usePagination = (allPosts: PostPrev[], slug: string | undefined | string[], pageNum: number) => {
  const router = useRouter(); // need access to query params
  const postsPerPage = 6;

  const getFirstIndex = () => {
    return (pageNum - 1) * postsPerPage;
  }

  //REWRITE THIS
  const getLastIndex = () => {
    let firstIndex = getFirstIndex();
    let lastIndex = 0;
    const postsLeft = allPosts.length - firstIndex;
    if (postsLeft > postsPerPage) lastIndex = firstIndex + postsPerPage
    else lastIndex = allPosts.length;
    return lastIndex;
  }

  let firstIndexCurrentPage = getFirstIndex();
  let lastIndexCurrentPage = getLastIndex();

  let current = allPosts.slice(firstIndexCurrentPage, lastIndexCurrentPage);
  const [currentPagePosts, setCurrentPagePosts] = useState<PostPrev[]>(current);

  const fullSlug = slug ? `/category/${slug}` : "";

  const hasNextButton = () => {
    return allPosts.length > lastIndexCurrentPage;
  }

  const hasPreviousButton = () => {
    return pageNum > 1;
  }

  useEffect(() => {
    // console.log("USEFFECT RUNNING ON LOAD");
    console.log(pageNum);
    firstIndexCurrentPage = getFirstIndex();
    lastIndexCurrentPage = getLastIndex();
    const newPosts = allPosts.slice(firstIndexCurrentPage, lastIndexCurrentPage);
    setCurrentPagePosts(newPosts);
  }, [])


  useEffect(() => {
    firstIndexCurrentPage = getFirstIndex();
    lastIndexCurrentPage = getLastIndex();
    const newPosts = allPosts.slice(firstIndexCurrentPage, lastIndexCurrentPage);
    setCurrentPagePosts(newPosts);
  }, [router.query.page, router.query.slug, router.pathname])

  //LOGS
  // useEffect(() => {
  //   console.log("allPosts.length: ", allPosts.length);
  //   console.log("firstIndexCurrentPage: ", firstIndexCurrentPage);
  //   console.log("lastIndexCurrentPage: ", lastIndexCurrentPage);
  //   console.log("TRUE OR FALSE FOR NEXT BUTTON: ", allPosts.length > lastIndexCurrentPage)
  // });

  return { hasNextButton, hasPreviousButton, currentPagePosts };
}


export default usePagination;