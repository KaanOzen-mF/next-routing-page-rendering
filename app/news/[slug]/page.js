import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  const newSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <article>
      <header>
        <img
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          className="w-28 mb-4 rounded-sm"
        />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
