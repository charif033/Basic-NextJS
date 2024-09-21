import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div>
          <h4 style={{ display: 'inline' }}>Basic - </h4>
          <Image
            className={styles.logo}
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <h1>Dev_School API</h1>
        <ol>
          <li>
            Got to <code>/api/students</code> to get all students data.
          </li>
          <li>
            Got to <code>/api/students/:id</code> to get student data by id.
          </li>
          <li>
            Got to <code>/api/students/class/:class</code> to get student data by class number.
          </li>
        </ol>

      </main>
    </div>
  );
}
