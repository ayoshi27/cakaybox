import { useCallback, useEffect, useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

import styles from "./Dialog.module.scss";

type Props = {
  isOpen: boolean;
  isLoading: boolean;
  children: React.ReactNode | React.ReactNode[];
  onClose: VoidFunction;
  onMetaKeyEnter?: VoidFunction;
  onDialogOpen?: VoidFunction;
};

export const Dialog: React.FC<Props> = ({
  isOpen,
  isLoading,
  children,
  onClose,
  onMetaKeyEnter,
  onDialogOpen,
}): React.ReactElement | null => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect((): void => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) {
      return;
    }
    if (isOpen) {
      if (dialogElement.hasAttribute("open")) return;
      onDialogOpen && onDialogOpen();
      dialogElement.showModal();
    } else {
      if (!dialogElement.hasAttribute("open")) return;
      dialogElement.close();
    }
  }, [isOpen]);

  const handleClickDialog = useCallback((): void => {
    onClose();
  }, [onClose]);

  const handleKyeDown = (e: React.KeyboardEvent<HTMLDialogElement>): void => {
    if (e.key === "Escape") {
      onClose();
    }
    if (e.metaKey && e.key === "Enter") {
      onMetaKeyEnter && onMetaKeyEnter();
    }
  };

  return (
    <RemoveScroll removeScrollBar enabled={isOpen}>
      <dialog
        className={styles["dialog"]}
        ref={dialogRef}
        onClick={handleClickDialog}
        onKeyDown={(e) => handleKyeDown(e)}
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
