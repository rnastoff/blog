import { PostSlug } from "../interfaces/postSlug";
import moment from 'moment';
import parse from 'html-react-parser';

const PostContent = ({ post }: { post: PostSlug }) => {

  return (
    <>
      <h1 className="text-center text-primary font-extrabold md:text-3xl text-2xl">{post.title.toUpperCase()}</h1>
      <h3 className="text-center -mt-[3px] mb-1">{moment(post.createdAt).format("MMMM DD, YYYY").toUpperCase()}</h3>
      <div className="border-b-[1px] border-primary mb-4"></div>

      <div className="content mt-2 px-4">
        {parse(post.content.html)}
      </div>
    </>
  )
}

export default PostContent;