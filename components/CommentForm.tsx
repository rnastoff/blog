import React, { useRef, useState, useEffect } from 'react';

import { submitComment } from '../services';

const CommentForm = ({ slug }: { slug: string }) => {
  const [error, setError] = useState(false);
  const [local, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef<HTMLTextAreaElement>(null);
  const nameEl = useRef<HTMLInputElement>(null);
  const emailEl = useRef<HTMLInputElement>(null);
  const storeDataEl = useRef();

  // (2:10:18)

  const handleCommentSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    const { value: comment } = commentEl.current as HTMLTextAreaElement;
    const { value: name } = nameEl.current as HTMLInputElement;;
    const { value: email } = emailEl.current as HTMLInputElement;;


    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };
    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000)
      })
  }


  const errorMessage = <p className="text-white text-center mt-5">All fields are required</p>;
  const successMessage = <p className="text-white text-center mt-5">Message Submitted</p>;


  return (
    <form className="py-4 px-5 md:mt-4 mt-4">
      <h3 className="text-primary text-center md:text-3xl text-2xl font-bold">LEAVE A COMMENT</h3>
      <textarea
        className="w-full h-24 focus:outline-0 text-black p-2 mt-2"
        placeholder="Leave a comment..."
        ref={commentEl}
      />

      <div className="flex justify-between mt-3 text-black">
        <input
          type="text"
          ref={nameEl}
          className="w-[49%] text-black text-current p-2 focus:outline-0"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          ref={emailEl}
          className="w-[49%] text-black p-2 focus:outline-0"
          placeholder="Email"
          name="email"
        />
      </div>

      <div className="text-center">
        <button
          className="bg-primary text-black font-bold px-20 py-3 mt-5 w-full"
          onClick={handleCommentSubmission}
        >
          SUBMIT
        </button>
      </div>
      {error && errorMessage}
      {showSuccessMessage && successMessage}


    </form>
  )
}

export default CommentForm;