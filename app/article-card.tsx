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
      className="block p-4 hover:bg-surface rounded-lg no-underline transition-colors hover:bg-hover mb-4 border-divider border"
    >
      <span>
        <h2 className="text-text-primary text-base font-medium mb-1">
          {title}
        </h2>
        <p className="text-text-secondary text-sm leading-snug">
          {description}
        </p>
      </span>
    </Link>
  );
};

export default Article;
