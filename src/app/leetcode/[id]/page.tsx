'use client';

import { MarkdownContent } from '@/components/markdown/MarkdownContent';

export default function Problem({ params }: any) {
  return <MarkdownContent id={params.id} />;
}
