import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const Home = () => {
  const [rating, setRating] = useState()
  const [submittedFeedback, setSubmittedFeedback] = useState()
  function handleSubmit() {
    setSubmittedFeedback(rating)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#141519] py-2">
      {!submittedFeedback ? (
        <>
          <div className="flex h-96 w-96 flex-col items-start justify-around rounded-3xl bg-[#212832] p-8 ">
            <img
              src="/images/icon-star.svg"
              alt="star"
              className="rounded-full bg-[#262F38] p-4"
            />
            <h2 className="text-2xl font-bold text-white">How did we do?</h2>
            <p className="font-semibold text-[#646B75]">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <ul className="flex w-full justify-evenly ">
              {[1, 2, 3, 4, 5].map((rate) => (
                <li
                  onClick={() => setRating(rate)}
                  className={`h-12 w-12 rounded-full bg-[#262F38] p-4 text-center font-bold leading-none hover:cursor-pointer 
               ${
                 rate === rating
                   ? 'bg-[#FB7713] text-white'
                   : 'text-[#646B75] hover:bg-[#7C8898] hover:text-white'
               }`}
                >
                  {rate}
                </li>
              ))}
            </ul>
            <button
              onClick={handleSubmit}
              className="w-full rounded-3xl bg-[#FB7713] py-2 text-center font-semibold tracking-widest text-white hover:cursor-pointer hover:bg-white hover:text-[#FB7713]"
            >
              SUBMIT
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex h-96 w-96 flex-col items-center justify-around rounded-3xl bg-[#212832] p-8 ">
            <img src="/images/illustration-thank-you.svg" alt="star" />
            <p className="rounded-full bg-[#262F38] py-2 px-3 text-[#FB7713]">{` You selected ${submittedFeedback} out of 5`}</p>
            <h2 className="text-2xl font-bold text-white">Thank you!</h2>
            <p className="text-center font-semibold text-[#646B75]">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Home
