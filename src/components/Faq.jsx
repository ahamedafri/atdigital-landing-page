import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";

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


const Faq = ()  => {
  const [cards] = useState(questions);

  return (
    <>
      <section className="w-4/5 mx-auto py-20 px-4">
        <h1 className="text-Primary text-center font-[poppins] text-[27px] font-semibold leading-8	 mb-8">
        Frequently asked questions
        </h1>

        <section className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </>
  );
}

export default Faq
