import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello, World</h1>
      <div className="bg-red-100 text-rose-700 p-4 w-20 flex flex-col gap-5">
        <Link href="about">About</Link>
        <Link href="blog">Blog</Link>
        <Link href="products">Products</Link>
      </div>
    </div>
  );
}
