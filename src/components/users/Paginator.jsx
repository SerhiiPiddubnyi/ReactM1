import React from "react";
import styles from "./Users.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let firstPage = 0;
    let lastPage = 0;
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    if (currentPage <= 6 || pagesCount < 12) {
        firstPage = 1;
        lastPage = (pagesCount < 12) ? pagesCount : 11;
    } else {
        firstPage = currentPage - 5;
        lastPage = (currentPage + 5 < pagesCount) ? currentPage + 5 : pagesCount;
    }
    let pages = [];
    for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(page => {
            return <span className={currentPage === page && styles.selectedPage}
                         onClick={() => {
                             onPageChanged(page)
                         }}>{page + ' '}</span>
        })}
    </div>

}

export default Paginator;