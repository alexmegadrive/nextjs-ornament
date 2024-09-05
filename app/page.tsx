import Image from "next/image";
import styles from "./page.module.css";
import { Alert, ThemeProvider, themeOrnamentDefault } from "@/ornament";

export default function Home() {
  return (
    <div className={styles.page}>
      <ThemeProvider theme={themeOrnamentDefault}>
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <p>Static elements inside ThemeProvider</p>
          <p>Static elements inside ThemeProvider</p>
          <p>Static elements inside ThemeProvider</p>
          <Alert
            title={"this element is NOT Static (compiled on client)"}
            status="success"
          />
          <Alert
            title={"this element is NOT Static (compiled on client)"}
            status="error"
          />
          <Alert
            title={"this element is NOT Static (compiled on client)"}
            status="warning"
          />
        </main>
      </ThemeProvider>
      <p></p>
      <p>Static elements outside ThemeProvider</p>
      <p>Static elements outside ThemeProvider</p>
    </div>
  );
}
