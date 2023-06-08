import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';

import Comment from './Comment';

interface Com {
  comment: string;
  createdAt: string;
  name: string;
}


const CommentGroup = ({ slug }: { slug: string }) => {
  console.log("slug", slug);

  const [comments, setComments] = useState<Com[]>([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
    console.log(comments);
  }, [])


  let commentsHtml = comments.map((comment) => (
    <Comment
      name={comment.name}
      createdAt={comment.createdAt}
      comment={comment.comment}
    />
  ))



  return (
    <div className="flex flex-col justify-center px-5 mb-10 md:mt-6 mt-4">

      <h2 className="text-center lg:text-3xl text-2xl font-bold text-primary">
        {comments.length === 1 && `There is ${comments.length} comment`}
        {comments.length > 1 && `There are ${comments.length} comments`}
        {comments.length === 0 && "There are no comments"}
      </h2>

      {commentsHtml}
    </div>
  )
}

export default CommentGroup;