import Link from 'next/link'
import moment from 'moment';

interface Category {
  name: string;
  slug: string;
}

interface PostPreview {
  categories: Category[];
  date: string;
  excerpt: string;
  slug: string;
  title: string;
}

const PostPreview = (post: PostPreview) => {

  const categories = post.categories.map((category, i, arr) => {
    const comma = arr.length - 1 === i ? "" : ", ";
    return (
      <span key={category.slug}>
        <Link
          className="cursor-pointer text-white hover:text-primary"
          key={category.slug}
          href={`/category/${category.slug}`}>{category.name.toUpperCase()}
        </Link>
        {comma}
      </span>
    );
  });

  const postSlug = `/post/${post.slug}`;

  return (
    <div className="md:mb-14 mb-7">
      <h2 className="lg:text-4xl md:text-3xl text-[1.4rem] leading-6 text-primary font-black md:mb-0 mb-1 hover:text-[#fff]">
        <Link href={postSlug}>
          {post.title.toUpperCase()}
        </Link>
      </h2>

      <div className="border-b-[1px] border-primary"></div>

      <div className="mt-1">
        <p className="md:inline-block block">
          {moment(post.date).format("MMMM DD, YYYY").toUpperCase()}
        </p>
        <span className="md:px-8 md:inline-block hidden">|</span>
        <span>
          <span className="font-semibold">TAGS: </span>
          {categories}
        </span>
      </div>

    </div>
  )
}

export default PostPreview;