import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "At our furniture store, our mission is to provide exceptional quality and stylish furniture that enhances the comfort and aesthetics of every home.  ",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to be the leading destination for furniture, where customers can discover their unique style and create remarkable living environments.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "With a rich legacy spanning over two decades, we have been proudly serving customers, curating exceptional furniture pieces that stand the test of time.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
