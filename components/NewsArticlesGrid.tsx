import { NewsArticle } from "@/model/newsArticle";
import NewsArticleEntry from "./NewsArticleEntry";

type NewsArticlesGridProps = {
  articles: NewsArticle[];
};

export default function NewsArticlesGrid({ articles }: NewsArticlesGridProps) {
  return (
    <section className="flex w-full flex-col justify-center gap-6 md:flex-row md:flex-wrap">
      {articles.map((article) => {
        return <NewsArticleEntry key={article.title} article={article} />;
      })}
    </section>
  );
}
