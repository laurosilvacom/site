import React from "react";
import Link from "next/link";

interface ArticleProps {
  title: string;
  description: string;
  link: string;
}

const Article: React.FC<ArticleProps> = ({ title, description, link }) => {
  return (
    <Link
      href={link}
      className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:no-underline hover:bg-gray-300 sm:py-3"
    >
      <span className="text-gray-1200">{title}</span>
      <span className="text-gray-1000">{description}</span>
    </Link>
  );
};

export default Article;
