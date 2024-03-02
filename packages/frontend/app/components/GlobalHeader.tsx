import styles from "./GlobalHeader.module.scss";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";

export default function GlobalHeader() {
  return (
    <header className={styles.globalHeader}>
      <SavingsRoundedIcon color="primary" fontSize="large" />
      <span className={styles.title}>Cakaybox</span>
    </header>
  );
}
