import { useRouter } from 'next/router';

interface PaginationProps {
  hasNextButton: boolean;
  hasPreviousButton: boolean;
}


const Pagination = ({ hasNextButton, hasPreviousButton }: PaginationProps) => {
  const router = useRouter()

  const increment = () => {
    if (router.asPath === "/") {
      router.push(`/?page=2`, undefined, { shallow: true });
    }
    else {
      let pageNum = getRouterPageNum() + 1;
      const slug = router.query.slug ? `/category/${router.query.slug}` : "";
      router.push(`/${slug}?page=${pageNum}`, undefined, { shallow: true });
    }
  }

  const decrement = () => {
    let pageNum = getRouterPageNum() - 1;
    const slug = router.query.slug ? `/category/${router.query.slug}` : "";
    router.push(`/${slug}?page=${pageNum}`, undefined, { shallow: true });
  }


  const getRouterPageNum = () => {
    return typeof router.query.page === 'string' ? parseInt(router.query.page) : 1;
  }

  const previousButton = <button
    className="font-bold border-primary border-2 py-2 w-28 mr-2 hover:text-primary"
    onClick={decrement}
  >PREVIOUS</button>;

  const nextButton = <button
    className="font-bold border-primary border-2 py-2 w-28 ml-2 hover:text-primary"
    onClick={increment}
  >NEXT</button>;

  return (
    <div className="text-center">
      {hasPreviousButton && previousButton}
      {hasNextButton && nextButton}
    </div>
  )
}

export default Pagination;