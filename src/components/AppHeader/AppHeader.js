import React from 'react';
import styles from './AppHeader.module.css';

function AppHeader() {
    return(
        <div className={styles.appHeaderContainer}>
            <h1>Covid19 Cases Analysis</h1>
        </div>
    )
}

export default AppHeader;