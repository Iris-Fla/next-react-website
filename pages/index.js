import Hero from "components/hero";
import Container from "components/container";
import Meta from "components/meta";

export default function Home() {
  return (
    <Container>
      <Meta pageTitle={"ブログ"} />
      <Hero title={"DEBA"} subtitle={"諸行無常の響きあるハダカデバネズミの生態について"} imageOn />
    </Container>
  );
}
