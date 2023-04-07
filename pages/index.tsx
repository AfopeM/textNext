import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Breaking News - NextJS</title>
      </Head>
      <div className="text-4xl uppercase text-blue-700">Next JS Stuff</div>
      <Link href="/search">Go to Search page</Link>
    </main>
  );
}
