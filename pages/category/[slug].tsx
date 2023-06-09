import { useRouter } from 'next/router';

import Loader from '../../components/Loader';
import PostPreview from '../../components/PostPreview';
import Pagination from '../../components/Pagination';

import { getCategoryPosts, getCategories } from '../../services';
import { PostPreviews, PostPrev, Category } from "../../interfaces/postPreview";

import usePagination from '../../hooks/usePagination';

const Category = ({ posts }: PostPreviews) => {
  const router = useRouter();
  const slug = router.query.slug;
  const pageNum = typeof router.query.page === 'string' ? parseInt(router.query.page) : 1;

  const {
    hasNextButton,
    hasPreviousButton,
    currentPagePosts } = usePagination(posts, slug, pageNum);

  if (router.isFallback) {
    return (
      <Loader />
    )
  }

  const categoryPostPreviews = currentPagePosts.map((post) => {
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
  })



  return (
    <div className="flex flex-col justify-center items-center">
      <div className="postPreviews md:mt-8 mt-4 lg:w-[32rem] md:w-[32rem] w-[20rem]">
        {categoryPostPreviews}
        <Pagination
          hasNextButton={hasNextButton()}
          hasPreviousButton={hasPreviousButton()}
        />
      </div>
    </div>
  )
}

export default Category;




export async function getStaticProps({ params }: { params: { "slug": string } }) {
  let data = await getCategoryPosts(params.slug);
  data = data.reverse();
  return {
    props: { posts: data }
  }
}

// BUILD these routes -> categories/hardware, categories/weird, etc
export async function getStaticPaths() {
  const { categories } = await getCategories();
  let paths = categories.map((category: Category): any => {
    return { params: { slug: category.slug } }
  });

  return {
    paths: paths,
    fallback: true,
  }
}