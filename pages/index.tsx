import Head from "next/head";
import Link from "next/link";
import { NewsArticle, NewsResponse } from "@/model/newsArticle";
import NewsArticleEntry from "@/components/NewsArticleEntry";
import NewsArticlesGrid from "@/components/NewsArticlesGrid";

type BreakingNewsPageProps = {
  newsArticles: NewsArticle[];
};

export async function getServerSideProps() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" +
      process.env.NEWS_API_KEY
  );

  const newsResponse: NewsResponse = await response.json();

  return {
    props: {
      newsArticles: newsResponse.articles,
    },
  };
}

export default function Home({ newsArticles }: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title>Breaking News - NextJS</title>
      </Head>
      <main>
        <div className="flex flex-col items-center pb-8">
          <Link href="/search">Go to Search page</Link>
          <h1 className="text-center text-4xl uppercase text-slate-700">
            Breaking-News
          </h1>
        </div>
        {/* {JSON.stringify(newsArticles)} */}
        {/* <NewsArticleEntry article={newsArticles[5]} /> */}
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  );
}
