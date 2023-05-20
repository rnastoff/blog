import PostContent from '../../components/PostContent';
import CommentForm from '../../components/CommentForm';
import CommentGroup from '../../components/CommentGroup';

const Post = () => {
  return (
    <div className="lg:mt-8 mt-4 lg:w-[32rem] md:w-[32rem] w-[20rem]">
      <PostContent />
      <hr className="mt-10 border-primary" />
      <CommentForm />
      <hr className="md:mt-12 mt-8 border-primary" />
      <CommentGroup />
    </div>
  )
}

export default Post;