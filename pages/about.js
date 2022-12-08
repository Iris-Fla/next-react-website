import Meta from "components/meta"
import Hero from "components/hero";
import Container from "components/container";
import PostBody from "components/post-body";
import Contact from "components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import Image from "next/legacy/image";
import eyecatch from "images/about.jpg";

export default function About() {
  return (
    <Container>
      <Meta pageTitle={"アバウト"}
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height} />
      <Hero title="About" subtitle="あー、それはアバウトだね。はは" />
      <figure>
        <Image
          src={eyecatch}
          alt="かわいい"
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h2>自己紹介</h2>
            <p>
              こんにちは、私はマイケル・ボビーです。私の経歴はハーバード大学中退です。中卒です
              私が今までで打ち込んできたことは、中学生の時にワクチンを打ち込みました。他にもキーボードで文字を打ち込みました。
            </p>
            <h2>実績</h2>
            <p>
              私はTOEIC957点です。Web上で15GBのファイルをダウンロードしたことがあります。
              他にも、魂のランクを上げる魔法のテスラ缶を所持しており、周りからは「変わったね」とよく言われます。
              私はヴィーガンです。焼肉でも行きませんか？共にサラダを食べましょう。
            </p>
            <h3>活動内容</h3>
            <p>
              私の主な活動内容は自販機の下にあるコインを収集する事です。もちろん、それは慈善活動であり、私はその仕事に埃、いや、誇りを持って取り組んでいます。ははは、ジョーク。
              私は芸術的な視線を持っており、ゴッホの絵がダサいと感じたので、右手にトマト缶を持ってぶちまけてやりました。左手は接着剤を使って壁と接着しました。芸術との一体化です。
            </p>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
