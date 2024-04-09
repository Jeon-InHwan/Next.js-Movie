import styles from "../../styles/aboutUs.module.css";

export default async function aboutUs() {
  return (
    <div className={styles.container}>
      <img
        src="https://avatars.githubusercontent.com/u/77829187?s=400&u=8bdfc595de11b6b7e58ac4165a3be328ba953470&v=4"
        className={styles.poster}
        alt="Fail to load image"
      ></img>
      <div className={styles.info}>
        <h1 className={styles.title}>Jeon, Fullstack Developer</h1>
        <h2 className={styles.skills}>Skills</h2>
        <ul>
          <li>1. ReactJS</li>
          <li>2. NextJS</li>
          <li>3. Flutter</li>
          <li>4. Java</li>
          <li>5. JavaScript</li>
          <li>6. NodeJS</li>
        </ul>
        <p></p>
        <a href="https://github.com/Jeon-InHwan" target={"_blank"}>
          Go to Github Profile
        </a>
      </div>
    </div>
  );
}
