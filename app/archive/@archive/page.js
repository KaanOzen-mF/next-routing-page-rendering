import Link from "next/link";

import { getAvailableNewsYears } from "@/lib/news";

export default function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header>
      <nav>
        <ul className="flex">
          {links.map((link) => (
            <li className="mr-4" key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
