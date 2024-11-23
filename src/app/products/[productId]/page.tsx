import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

async function SubProductPage({ params }: Props) {
  const { productId } = await params;
  return <div>Product {productId} Details</div>;
}
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${productId} Details`);
    }, 1000);
  });
  return {
    title: `Product ${productId} Details`,
    description: `Product ${productId} Details`,
  };
};

export default SubProductPage;
