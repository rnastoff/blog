import Comment from './Comment';

const CommentGroup = () => {
  return (
    <div className="flex flex-col justify-center px-5 mb-10 md:mt-12 mt-8">
      <h2 className="text-center lg:text-3xl text-2xl font-bold text-primary">5 COMMENTS</h2>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default CommentGroup;