import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="font-sans text-xl rounded-md">
        <Link
          href="/"
          className="text-[#e1e1d7] hover:text-[#e1e1d7] no-underline"
        >
          NextNews
        </Link>
      </div>
      <nav>
        <ul className="flex gap-8 font-bold">
          <li>
            <Link
              href="/news"
              className="text-[#e5e5e1] px-2 py-1 rounded-md no-underline hover:bg-[#bcbcb7] hover:text-[#181817] active:bg-[#bcbcb7] active:text-[#181817]"
            >
              News
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
