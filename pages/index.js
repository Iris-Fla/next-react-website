import Hero from "components/hero";
import Container from "components/container";
import Meta from "components/meta";

export default function Home() {
  return (
    <Container>
      <Meta pageTitle={"ブログ"} />
      <Hero title={"CUBE"} subtitle={"CUBECUBECUBECUBEテトリス"} imageOn />
    </Container>
  );
}
