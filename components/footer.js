import Logo from "components/logo";
import styles from "styles/footer.module.css";
import Container from "components/container";
import Social from "components/socials";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
}
