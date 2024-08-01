import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>

      <Link href="/news/One">
        <p>New One</p>
      </Link>

      <Link href="/news/Two">
        <p>New Two</p>
      </Link>

      <Link href="/news/Three">
        <p>New Three</p>
      </Link>
    </>
  );
}
