import React from "react";
import styles from "../../styles/components/ppvImage.module.css";
import ppvImage from "../../images/upsell.jpeg";
function PPVImage() {
  return (
    <div className={styles.ppvContainer}>
      <img className={styles.ppvImage} src={ppvImage} alt="" />
    </div>
  );
}

export default PPVImage;
