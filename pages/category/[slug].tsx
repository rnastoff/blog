import Header from '../../components/Header';
import PostPreview from '../../components/PostPreview';
import Pagination from '../../components/Pagination';

import { getCategoryPosts, getCategories } from '../../services';
import { PostPreviews, PostPrev, Category } from "../../interfaces/postPreview";

import usePagination from '../../hooks/usePagination';

const Category = ({ posts }: PostPreviews) => {
  let categoryPosts = posts.reverse();
  const query = "category";

  const {
    pageNumber,
    handlePageChange,
    hasNextButton,
    hasPreviousButton,
    currentPagePosts } = usePagination(categoryPosts, query);

  const categoryPostPreviews = posts.map((post) => {
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
  })

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="postPreviews md:mt-8 mt-4 lg:w-[32rem] md:w-[32rem] w-[20rem]">
        {categoryPostPreviews}
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

export default Category;

export async function getStaticProps({ params }: { params: { "slug": string } }) {
  let data = await getCategoryPosts(params.slug);
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
    fallback: false,
  }
}