export const markdownPackageName = "@dev-knowledge-hub/markdown";

export type MarkdownInput = {
  source: string;
};

export function normalizeMarkdown(input: MarkdownInput): MarkdownInput {
  return {
    source: input.source.trim(),
  };
}
