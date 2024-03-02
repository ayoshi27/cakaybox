import dayjs from "dayjs";
import styles from "./ControlPanel.module.scss";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ControlPanel(props: {
  yearMonth: string;
  moveToAdjacentMonth: (direction: "prev" | "next") => void;
  navigateToExpnedsPage: () => void;
}) {
  const { navigateToExpnedsPage } = props;

  return (
    <div className={styles.controlPanel}>
      <button
        className={styles.prevButton}
        onClick={() => props.moveToAdjacentMonth("prev")}
      >
        <ChevronLeftIcon />
        <span className={styles.prevButtonLabel}>前月</span>
      </button>
      <span className={styles.currentYearMonth}>
        {dayjs(props.yearMonth).format("YYYY年MM月")}の支出集計
      </span>
      <button
        className={styles.nextButton}
        onClick={() => props.moveToAdjacentMonth("next")}
      >
        <span className={styles.nextButtonLabel}>翌月</span>
        <ChevronRightIcon />
      </button>
      <button
        className={styles.toCountingButton}
        onClick={navigateToExpnedsPage}
      >
        <span className={styles.toCountingButtonLabel}>
          {dayjs(props.yearMonth).format("YYYY年MM月")}の
        </span>
        支出一覧
      </button>
    </div>
  );
}
