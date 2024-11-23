import React from "react";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

async function ProductReviewPage({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = await params;
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }

  if (parseInt(reviewId) > 100) {
    return notFound();
  }
  return (
    <div>
      ProductReviewPage for product {productId}
      and review {reviewId}
    </div>
  );
}

export default ProductReviewPage;
