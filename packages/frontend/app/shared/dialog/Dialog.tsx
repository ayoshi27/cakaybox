import { useCallback, useEffect, useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

import styles from "./Dialog.module.scss";

type Props = {
  isOpen: boolean;
  isLoading: boolean;
  children: React.ReactNode | React.ReactNode[];
  onClose: VoidFunction;
};

export const Dialog: React.FC<Props> = ({
  isOpen,
  isLoading,
  children,
  onClose,
}): React.ReactElement | null => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect((): void => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) {
      return;
    }
    if (isOpen) {
      if (dialogElement.hasAttribute("open")) {
        return;
      }
      dialogElement.showModal();
    } else {
      if (!dialogElement.hasAttribute("open")) {
        return;
      }
      dialogElement.close();
    }
  }, [isOpen]);

  const handleClickDialog = useCallback((): void => {
    onClose();
  }, [onClose]);

  return (
    <RemoveScroll removeScrollBar enabled={isOpen}>
      <dialog
        className={styles["dialog"]}
        ref={dialogRef}
        onClick={handleClickDialog}
      >
        {isLoading && (
          <div
            className={styles["loadingOverlay"]}
            onClick={(e) => e.stopPropagation()}
          >
            loading...
            {/* TODO: implement progress circle */}
          </div>
        )}
        <div className={styles["content"]} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </dialog>
    </RemoveScroll>
  );
};