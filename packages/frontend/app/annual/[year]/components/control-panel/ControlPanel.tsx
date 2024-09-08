import dayjs from "dayjs";
import styles from "./ControlPanel.module.scss";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ControlPanel(props: {
  year: string;
  moveToAdjacentYear: (direction: "prev" | "next") => void;
}) {
  return (
    <div className={styles.controlPanel}>
      <button
        className={styles.prevButton}
        onClick={() => props.moveToAdjacentYear("prev")}
      >
        <ChevronLeftIcon />
        <span className={styles.prevButtonLabel}>前年</span>
      </button>
      <span className={styles.currentYear}>
        {dayjs(props.year).format("YYYY年")}の支出
      </span>
      <button
        className={styles.nextButton}
        onClick={() => props.moveToAdjacentYear("next")}
      >
        <span className={styles.nextButtonLabel}>翌年</span>
        <ChevronRightIcon />
      </button>
    </div>
  );
}
