import { ProgramType } from "./types";

export function sortPrograms(data: ProgramType[], sortBy: string) {
  if (sortBy === "rank") {
    data.sort((a, b) => (b.featured ? 1 : -1) - (a.featured ? 1 : -1));
  } else if (sortBy === "discounted_price") {
    data.sort((a, b) => a.discountFee - b.discountFee);
  } else if (sortBy === "-discounted_price") {
    data.sort((a, b) => b.discountFee - a.discountFee);
  }

  return data;
}
