import React from "react";
import styles from "../../styles/components/ppvImage.module.css";
import ppvImage from "../../images/upsell.jpeg";
function PPVImage() {
  return (
    <div>
      <img className={styles.ppvImage} src={ppvImage} alt="" />
      <div className={styles.ppvText}>Will the Aliens take over OVW?</div>
      <div className={styles.ppvText}>Find out on the 16th of March</div>
    </div>
  );
}

export default PPVImage;
