import { useMemo } from "react";
import { getAllReviews, getReviewBySlug } from "@/utils/parseReviewsMarkdown";

export function useReviews() {
  return useMemo(() => getAllReviews(), []);
}

export function useReview(slug) {
  return useMemo(() => getReviewBySlug(slug), [slug]);
}
