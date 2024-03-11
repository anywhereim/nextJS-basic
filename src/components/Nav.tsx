"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <Link href="/ssg">SSG</Link>
      <Link href="/isr">ISR</Link>
      <Link href="/ssr">SSR</Link>
      <Link href="/csr">CSR</Link>
    </div>
  );
}
