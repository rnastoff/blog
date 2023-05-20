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
    let comma = arr.length - 1 === i ? "" : ", ";
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
    <div className="w-full md:mb-16 mb-8">
      <h2 className="text-center text-primary font-extrabold md:text-3xl text-xl">
        <Link href={postSlug}>
          {post.title.toUpperCase()}
        </Link>
      </h2>

      <h3 className="text-center -mt-[2px]">{moment(post.date).format("MMMM DD, YYYY").toUpperCase()}</h3>

      <div className="border-2 border-primary px-3 py-2">
        <p>{post.excerpt}</p>
        <Link
          href={postSlug}
          className="text-white text-center w-full block font-bold mt-2 text-white hover:text-primary"
        >
          READ MORE
        </Link>
      </div>

      <p className="text-sm text-center mt-1">
        <span className="font-semibold">TAGS: </span>
        {categories}
      </p>
    </div>
  )
}

export default PostPreview;