import Link from "next/link";
import React from "react";

export const metadata = {
  name: "About Page",
  title: "About Page",
  description: "About Page",
};

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">Home</Link>
    </div>
  );
}

export default AboutPage;
