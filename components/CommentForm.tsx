
// border-2 border-[#eec74d]

const CommentForm = () => {
  return (
    <form className="py-4 px-5 md:mt-8 mt-4">
      <h3 className="text-primary text-center md:text-3xl text-2xl font-bold">LEAVE A COMMENT</h3>
      <textarea className="w-full h-24 focus:outline-0 text-black p-2 mt-2" placeholder="Leave a message..." />

      <div className="flex justify-between mt-3">
        <input type="text" className="w-[49%] text-black p-2 focus:outline-0" placeholder="Name" />
        <input type="email" className="w-[49%] text-black p-2 focus:outline-0" placeholder="Email" />
      </div>

      <div className="text-center">
        <button className="bg-primary text-black font-bold px-20 py-3 mt-5 w-full">SUBMIT</button>
      </div>

    </form>
  )
}

export default CommentForm;