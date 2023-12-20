import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";

const hotquestions = [
  {
    id: 1,
    title:
      "Would it be appropriate to point out an error in another paper during a referee report?",
  },
  {
    id: 2,
    title: "How can an airconditioning machine exist?",
  },
  {
    id: 3,
    title: "Interrogated every time crossing UK Border as citizen",
  },
  {
    id: 4,
    title: "Low digit addition generator",
  },
  {
    id: 5,
    title: "What is an example of 3 numbers that do not make up a vector?",
  },
];
const popularTags = [
  {
    id: 1,
    name: "Python",
    totalquestions: 10,
  },
  {
    id: 2,
    name: "JavaScript",
    totalquestions: 8,
  },
  {
    id: 3,
    name: "TypeScript",
    totalquestions: 5,
  },
  {
    id: 4,
    name: "Java",
    totalquestions: 6,
  },
  {
    id: 5,
    name: "PHP",
    totalquestions: 1,
  },
];
const RightSide = () => {
  return (
    <section className="background-light900_dark200  light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[266px]">
      <div>
        {" "}
        <h3 className="h3-bold text-dark500_light700 ">Hot Network</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotquestions.map((question) => (
            <Link
              href={`/questions/${question.id}`}
              key={question.id}
              className="flex cursor-pointer items-center justify-between gap-7">
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="assets/icons/chevron-right.svg"
                alt="chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className=" mt-16">
        <h3 className="h3-bold text-dark500_light700">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag.id}
              _id={tag.id}
              name={tag.name}
              totalQuestions={tag.totalquestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSide;
