import Hero from "components/hero";
import Container from "components/container";
import Meta from "components/meta";
import Posts from "components/posts";
import { getAllPosts } from "lib/api";

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero
        title="GOOGLEで誤翻訳されるワイルドスピード<br>[野生速度]"
        subtitle="ブログ書くの楽しいよねわかるー。"
      />
    </Container>
  );
}
