import SocialLinks from "@components/SocialLinks";
import FooterStyles from "@styles/Footer.module.css";
import ButtonStyles from "@styles/Button.module.css";
import { Config } from "@utils/Config";

export default function Footer() {
  const date = new Date();

  return (
    <footer className={FooterStyles.footer}>
      <p className={FooterStyles.footer__copyright}>
        All Rights Reserved.
      </p>
    </footer>
  );
}
