import PropTypes from "prop-types";
import styles from "./menu-modal.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import Icon from "../Icon";
import Button from "../Button";
import logo from "../../assets/monstercat-logo-white.svg";

const linksArr = [
  {
    subTree: true,
    name: "Music",
    url: "/",
    subLinks: [
      {
        name: "Our Music",
        url: "/",
      },
      {
        name: "Instinct",
        url: "/",
      },
      {
        name: "Uncaged",
        url: "/",
      },
      {
        name: "Silk",
        url: "/",
      },
    ],
  },
  {
    subTree: false,
    name: "Artists",
    url: "/",
    subLinks: [],
  },
  {
    subTree: true,
    name: "About",
    url: "/",
    subLinks: [
      {
        name: "About Monstercat",
        url: "/",
      },
      {
        name: "Diversity & Inclusion",
        url: "/",
      },
      {
        name: "Code of Ethics",
        url: "/",
      },
      {
        name: "Environmental",
        url: "/",
      },
      {
        name: "Contact Us",
        url: "/",
      },
    ],
  },
  {
    subTree: false,
    name: "News",
    url: "/",
    subLinks: [],
  },
  {
    subTree: true,
    name: "Events",
    url: "/",
    subLinks: [
      {
        name: "Monstercat Events Experience",
        url: "/",
      },
      {
        name: "Upcoming Events",
        url: "/",
      },
    ],
  },
  {
    subTree: true,
    name: "Programming",
    url: "/",
    subLinks: [
      {
        name: "MonstercatTV",
        url: "/",
      },
      {
        name: "Call of the Wild",
        url: "/",
      },
      {
        name: "Silk Showcase",
        url: "/",
      },
      {
        name: "Upcoming Shows",
        url: "/",
      },
    ],
  },
  {
    subTree: false,
    name: "Gold",
    url: "/",
    subLinks: [],
  },
  {
    subTree: false,
    name: "Partners",
    url: "/",
    subLinks: [],
  },
  {
    subTree: false,
    name: "Press",
    url: "/",
    subLinks: [],
  },
  {
    subTree: false,
    name: "Player",
    url: "/",
    subLinks: [],
  },
  {
    subTree: false,
    name: "Shop",
    url: "/",
    subLinks: [],
  },
  {
    subTree: false,
    name: "Lost Civilization",
    url: "/",
    subLinks: [],
  },
];

const SubLink = ({ url, content, lowercase = false }) => {
  return (
    <li>
      <a
        className={`${styles.navLink} ${styles.secondary}`}
        href={url}
        style={{ textTransform: lowercase ? "revert" : "uppercase" }}
      >
        {content}
      </a>
    </li>
  );
};

SubLink.propTypes = {
  url: PropTypes.string,
  content: PropTypes.string,
  lowercase: PropTypes.bool,
};

const SubMenu = ({ subLinksArr }) => {
  return (
    <Accordion.Content className={styles.accordionContent}>
      <ul className={styles.secondaryMenu}>
        {subLinksArr.map((link) => {
          return (
            <SubLink
              key={link.name}
              url={link.url}
              content={link.name}
              lowercase={link.name === "MonstercatTV"}
            />
          );
        })}
      </ul>
    </Accordion.Content>
  );
};

SubMenu.propTypes = {
  subLinksArr: PropTypes.array,
};

const NavLink = ({ navLinkObj }) => {
  const { subTree, name, url, subLinks } = navLinkObj;
  if (subTree) {
    return (
      <Accordion.Item value={name} className={styles.accordionItem}>
        <Accordion.Trigger className={`${styles.trigger} ${styles.navLink}`}>
          {name}{" "}
          <Icon
            id="chevron"
            size={12}
            strokeWidth={8}
            offsetY={0}
            color="white"
          />
        </Accordion.Trigger>
        <SubMenu subLinksArr={subLinks} />
      </Accordion.Item>
    );
  } else {
    return (
      <Accordion.Item className={styles.accordionItem} value={name} asChild>
        <a href={url} className={styles.navLink}>
          {name}
        </a>
      </Accordion.Item>
    );
  }
};

NavLink.propTypes = {
  navLinkObj: PropTypes.object,
};

const MenuModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.iconButton}>
          <Icon id="hamburger" size={20} strokeWidth={6} color="white" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title />
          <Dialog.Description />

          <div className={styles.top}>
            <img src={logo} className={styles.logo} />
            <Dialog.Close asChild>
              <button className={styles.iconButton}>
                <Icon id="close" size={20} strokeWidth={8} color="white" />
              </button>
            </Dialog.Close>
          </div>
          <nav className={styles.navigation}>
            <Accordion.Root type="multiple">
              {linksArr.map((link) => (
                <NavLink key={link.name} navLinkObj={link} />
              ))}
            </Accordion.Root>
          </nav>
          <div className={styles.loginControls}>
            <Button size="small" outline={true}>
              Log in
            </Button>
            <Button size="small" type="transparent">
              Or sign up
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

MenuModal.propTypes = {};

export default MenuModal;
