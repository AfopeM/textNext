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
        <div className="flex flex-col items-center pb-8 text-center">
          <Link href="/search">Go to Search page</Link>
          <h1 className="text-4xl uppercase text-blue-700">Breaking-News</h1>
          <p className="px-20 pt-4">
            This page uses{" "}
            <span className="font-black">getServerSidePropsx</span> to fetch
            data sever-side on every request. This allows search engines to
            crawl the page content and{" "}
            <span className="font-black">improves SEO</span>.
          </p>
        </div>
        {/* {JSON.stringify(newsArticles)} */}
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  );
}
