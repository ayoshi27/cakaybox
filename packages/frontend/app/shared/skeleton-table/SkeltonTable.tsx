import styles from "./SkeletonTable.module.scss";

export default function SkeletonTable(): React.ReactElement {
  return (
    <div className={styles.skeletonTable}>
      <table>
        <thead>
          <tr>
            {[...Array(5)].map((_, index) => (
              <th key={index}>
                <span></span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, index) => (
            <tr key={index}>
              {[...Array(5)].map((_, index) => (
                <td key={index}>
                  <span></span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
