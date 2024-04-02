import classNames from "classnames";
import Link from "next/link";

import styles from "@/styles/Home.module.css";

const containerClasses = classNames(styles.container, "flex-col", "align-center", "position-absolute");
const linkSharedPageButtonClasses = classNames(styles.button, "background-red", "text-color-white", "border-none");
const linkFolderPageButtonClasses = classNames(styles.button, "background-primary", "text-color-white", "border-none");

export default function Home() {
  return (
    <main className={containerClasses}>
      <Link to="/shared" onClick={scrollToTop}>
        <Button className={linkSharedPageButtonClasses}>SharedPage</Button>
      </Link>
      <Link to="/folder" onClick={scrollToTop}>
        <Button className={linkFolderPageButtonClasses}>FolderPage</Button>
      </Link>
    </main>
  );
}
