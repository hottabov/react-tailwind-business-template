/**
 * useBlogPosts — thin hook wrapper around parseMarkdown utilities.
 * Keeps page components clean.
 */
import { useMemo } from 'react';
import { getAllPosts, getPostBySlug } from '@/utils/parseMarkdown';

export function useBlogPosts() {
  return useMemo(() => getAllPosts(), []);
}

export function useBlogPost(slug) {
  return useMemo(() => getPostBySlug(slug), [slug]);
}
