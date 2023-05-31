import moment from 'moment';

interface Comment {
  comment: string;
  createdAt: string;
  name: string;
}

const Comment = (comment: Comment) => {
  return (
    <div className="border-2 border-primary p-3 mt-3 mb-3">
      <p>
        <span className="font-bold">{comment.name.toUpperCase()}</span> - {moment(comment.createdAt).format("MMMM DD, YYYY").toUpperCase()}
      </p>
      <p className="mt-2">
        {comment.comment}
      </p>
    </div>
  )
}

export default Comment;