import React from "react";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Blog Page", // Displays Blog Page | Parna - Js in the browser tab due to the template in layout.tsx
// };

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

function BlogPage() {
  return <div>Blog Page</div>;
}

export default BlogPage;
