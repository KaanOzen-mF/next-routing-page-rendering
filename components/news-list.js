import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
