import Image from "next/image";
import styles from "./page.module.css";
import { Alert, ThemeProvider, themeOrnamentDefault, Typography } from "@/ornament";

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
          <p>Static element inside ThemeProvider</p>
          <p>Static element inside ThemeProvider</p>
          <p>Static element inside ThemeProvider</p>
          <Typography>777</Typography>
          <Alert
            title={"this element is prerendered on server and re-rendered on client"}
            status="success"
          />
          <Alert
            title={"this element is prerendered on server and re-rendered on client"}
            status="error"
          />
          <Alert
            title={"this element is prerendered on server and re-rendered on client"}
            status="warning"
          />
        </main>
      </ThemeProvider>
      <p></p>
      <p>Static element outside ThemeProvider</p>
      <p>Static element outside ThemeProvider</p>
    </div>
  );
}
