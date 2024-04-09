"use client";

import { useState } from "react";
import styles from "../styles/infoDetails.module.css";
import { useRouter } from "next/navigation";

export default function InfoDetails({ id, page }) {
  const [title, setTitle] = useState("");
  const router = useRouter();

  console.log(page);

  const onClick = (e) => {
    var context = e.target.outerText;
    if (context == "trailers") {
      router.push(`/movies/${id}`);
    } else {
      router.push(`/movies/${id}/${context}`);
    }
  };

  return (
    <div>
      <nav className={styles.infoDetails}>
        <ul>
          <li
            className={page == "infoPage" ? styles.chosenOne : styles.notChosen}
          >
            <p onClick={onClick}>trailers</p>
          </li>
          <li
            className={
              page == "creditsPage" ? styles.chosenOne : styles.notChosen
            }
          >
            <p onClick={onClick}>credits</p>
          </li>
          <li
            className={
              page == "similarsPage" ? styles.chosenOne : styles.notChosen
            }
          >
            <p onClick={onClick}>similars</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
