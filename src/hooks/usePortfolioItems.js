import { useMemo } from 'react';
import {
  getAllPortfolioItems,
  getPortfolioItemBySlug,
} from '@/utils/parsePortfolioMarkdown';

export function usePortfolioItems() {
  return useMemo(() => getAllPortfolioItems(), []);
}

export function usePortfolioItem(slug) {
  return useMemo(() => getPortfolioItemBySlug(slug), [slug]);
}
