import React from "react";
import styles from "./Paginator.module.css"

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

    const ButtonToStart = () => {
        return <button onClick={() => {onPageChanged(1)}}>To start</button>
    }

    const ButtonToEnd = () => {
        return <button onClick={() => {onPageChanged(pagesCount)}}>To end</button>
    }

    return <div className={styles.paginatorComment}>
        {currentPage > 6 && <ButtonToStart />}
        {pages.map(page => {
            return <span>
                <span className={currentPage === page ? styles.selectedPage : styles.allPages}
                      onClick={() => {
                          onPageChanged(page)
                      }}>{page}</span>
            </span>
        })}
        {currentPage + 5 < pagesCount && <ButtonToEnd />}
    </div>

}

export default Paginator;