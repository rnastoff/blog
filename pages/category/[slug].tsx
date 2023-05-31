import PostPreview from '../../components/PostPreview';
import { getCategoryPosts, getPreviewPosts, getCategories } from '../../services';

import { CategoryPostPreviews, Category } from "../../interfaces/categoryPostPreview";


//grab slug from category

const Category = ({ posts }: CategoryPostPreviews) => {

  // console.log("INSIDE COMPONENT", posts);

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
    <div>
      <div className="postPreviews md:mt-8 mt-4 lg:w-[32rem] md:w-[32rem] w-[20rem]">
        {categoryPostPreviews}
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