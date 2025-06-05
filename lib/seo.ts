export const seo = {
  title: 'Allen Castle | 开发者、设计师、细节控、创新范',
  description:
    '我叫 Allen，一名开发者，设计师，细节控。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://allen.so'
      : 'http://localhost:3000'
  ),
} as const
