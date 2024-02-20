import { Article } from '@/components/news';
import { news } from '@/consts';

export async function getStaticPaths() {
  const paths = news.map(post => ({
      params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export default function ArticlePage() {
  return (
    <main>
      <Article />
    </main>
  );
}
