import { random } from "./index";

export const generateProperties = (n: number = 16) =>
  new Array(n).fill(null).map((_, i) => ({
    title: "Penthouse in Howald" + (i + 1),
    image: "/images/card-image.png",
    price: random(765000, 865000),
    bedrooms: random(2, 10),
    surface: random(300, 450),
    review: random(2, 5),
    loading: false,
  }));
