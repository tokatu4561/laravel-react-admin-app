import React, { FC } from "react";

interface Props {
  currentPage: number;
  lastPage: number;
  pageChange: React.Dispatch<React.SetStateAction<number>>;
}

export const Paginater: FC<Props> = ({ currentPage, lastPage, pageChange }) => {
  const onNext = () => {
    if (currentPage < lastPage) {
      pageChange((page) => page + 1);
    }
  };

  const onPrev = () => {
    if (currentPage >= 1) {
      pageChange((page) => page - 1);
    }
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link" onClick={onPrev}>
            Previous
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link" onClick={onNext}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
