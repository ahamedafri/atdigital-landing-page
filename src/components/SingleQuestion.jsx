import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";


const questions = [
  {
    question: "How do I choose the right digital marketing agency in Sydney for my business?",
    answer:
      "Start by clearly defining your business goals and marketing objectives. Then, research and shortlist agencies that specialize in the services you require. Evaluate their experience, industry expertise, client reviews, and case studies to ensure they align with your needs. Request proposals and have initial meetings to gauge their communication, understanding, and cultural fit.",
  },
  {
    question: "What services should I look for in a digital marketing agency?",
    answer:
      "A successful digital marketing strategy typically includes elements like defining target audiences, conducting market research, creating engaging content, implementing SEO techniques, leveraging social media platforms, utilising email marketing, and analysing data for continuous improvement.",
  },
  {
    question: "What are the different digital advertising platforms?",
    answer:
      "Some popular digital advertising platforms include Google Ads, Facebook Ads, Instagram Ads, Twitter Ads, LinkedIn Ads, and YouTube Ads. These platforms provide various targeting options and ad formats to reach specific audiences.",
  }, ];

const SingleQuestion = ({ question, answer })  => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className=" bg-[#FAF8FF]">
        <article className="flex items-center justify-between p-4 lg:p-6">
          <h2
            className={ ` font-[Inter] leading-7 cursor-pointer font-medium text-[22px] ${showAnswer ? 'text-Primary': '  text-black'}`}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>
          <ul>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                  <BsPlusLg />
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(false)}>
                  <BiMinus />
                </button>
              </li>
            )}
          </ul>
        </article>

        <article
          className={`${showAnswer && " p-4 lg:p-6"}`}
        >
          {showAnswer && <p className="text-[#6F6C90] font-[Inter] leading-7 font-normal text-[18px]">{answer}</p>}
        </article>
      </div>
    </>
  );
}

export default SingleQuestion
