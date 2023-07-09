import React from "react";
import styles from "./footer.module.css";
import PropTypes from "prop-types";
import Icon from "../Icon";

const footerData = {
  firstCol: ["About Monstercat", "Contact Us", "Careers", "News", "Press"],
  secondCol: ["Terms of Service", "Privacy Policy"],
};

const FooterLink = ({ children }) => {
  return (
    <li>
      <a href="/">{children}</a>
    </li>
  );
};

FooterLink.propTypes = {
  children: PropTypes.node,
};

const FooterLinkList = ({ listData }) => {
  return (
    <ul className={`${styles.footerCol} ${styles.footerList}`}>
      {listData.map((item, index) => {
        return <FooterLink key={index}>{item}</FooterLink>;
      })}
    </ul>
  );
};

FooterLinkList.propTypes = {
  listData: PropTypes.array,
};

const Footer = () => {
  const [email, setEmail] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.validity?.valid) {
      console.log(email);
    }
  };

  const arrowRight = (
    <g>
      <line x1="3.54" y1="32" x2="58.5" y2="32" />
      <polyline points="50 42.71 59.5 32.18 50 21.29" />
    </g>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBody}>
        <FooterLinkList listData={footerData.firstCol} />
        <FooterLinkList listData={footerData.secondCol} />
        <form className={`${styles.footerCol} ${styles.form}`}>
          <h3>Monstercat News</h3>
          <p>
            Don&apos;t miss a thing, stay up to date with the latest news from
            us.
          </p>
          <div className={styles.field}>
            <label htmlFor="emailField">Enter your email:</label>
            <div className={styles.iconInput}>
              <input
                id="emailField"
                type="email"
                name="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="button" onClick={(e) => handleSubmit(e)}>
                <Icon size={32} color="var(--color-black)" strokeWidth={2}>
                  {arrowRight}
                </Icon>
              </button>
            </div>
          </div>
        </form>
      </div>
      <p className={styles.copyright}>
        2011 - 2023 © Monstercat, All Rights Reserved
      </p>
      <p className={styles.disclaimer}>
        We acknowledge with gratitude the traditional, ancestral and unceded
        land of the Coast Salish peoples, including the territories of the
        Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
        (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which
        Monstercat&apos;s Vancouver HQ stands. We acknowledge the unceded and
        ancestral territories of the Gabrielino/Tongva peoples on which our LA
        team live and work.
      </p>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
