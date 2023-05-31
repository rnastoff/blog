import PostPreview from '../components/PostPreview';
import { getPreviewPosts } from '../services';

import { PostPreviews } from "../interfaces/postPreview";

export default function Home({ posts }: PostPreviews) {

  const postPreviews = posts.map((post) => {
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

  return (
    <div>
      <div className="postPreviews md:mt-8 mt-4 lg:w-[32rem] md:w-[32rem] w-[20rem]">
        {postPreviews}
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