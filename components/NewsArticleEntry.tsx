import { NewsArticle } from "@/model/newsArticle";
import Link from "next/link";
import Image from "next/image";

type NewsArticleEntryProps = {
  article: NewsArticle;
};

export default function NewsArticleEntry({
  article: { title, description, url, urlToImage },
}: NewsArticleEntryProps) {
  const validImageUrl =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")
      ? urlToImage
      : "https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png";

  return (
    <article className="flex h-[30rem] w-[30rem] flex-col gap-4 overflow-hidden rounded-2xl bg-gray-100">
      <Link href={url} className="relative h-60 w-full">
        <Image
          src={validImageUrl}
          alt={`${title} Image`}
          fill
          sizes="(max-width:268px) 100vw"
          className="object-cover"
        />
      </Link>
      <section className="p-4 text-center">
        <h2 className=" pb-2 text-2xl font-black text-slate-900">{title}</h2>
        <p>{description}</p>
      </section>
    </article>
  );
}
