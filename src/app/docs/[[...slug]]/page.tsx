import React from "react";

async function DocsPage({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;
  if (slug?.length == 2) {
    return (
      <div>
        Docs Page for {slug[0]} and {slug[1]}
      </div>
    );
  } else if (slug?.length == 1) {
    return <div>Docs Page for {slug[0]}</div>;
  } else {
    return <div>Docs Page</div>;
  }
}

export default DocsPage;
