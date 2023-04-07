import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { NewsArticle } from "@/model/newsArticle";
import NewsArticlesGrid from "@/components/NewsArticlesGrid";

export default function Search() {
  //prettier-ignore
  const [searchResults, setSearchResults] = useState< NewsArticle[] | null >(null);
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  //prettier-ignore
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();

    if (searchQuery) {
      try {
        setSearchResults(null);
        setSearchResultsLoadingIsError(false);
        setSearchResultsLoading(true);

        const response = await fetch("/api/search?q=" + searchQuery);
        const articles: NewsArticle[] = await response.json();

        setSearchResults(articles);
      } catch (error) {
        console.log(error);
        setSearchResultsLoadingIsError(true);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  }

  return (
    <div className="flex w-screen flex-col items-center">
      <div className="pb-8 text-center">
        <Link href="/">Go Back</Link>
        <h1 className=" text-4xl uppercase text-blue-700">Search</h1>
      </div>
      <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className="flex w-full flex-col items-center gap-4"
      >
        <input
          type="text"
          name="searchQuery"
          id=""
          placeholder="E.g. politics, sports, games etc."
          className=" w-64 rounded-2xl p-4 ring-2 ring-blue-300"
        />
        <input
          type="submit"
          value="Search"
          disabled={searchResultsLoading}
          className="cursor-pointer  rounded-lg bg-slate-500 px-8 py-2 text-white"
        />
      </form>
    </div>
  );
}
