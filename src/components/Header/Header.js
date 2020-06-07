import React from 'react';
import styles from './Header.module.css';

const Header = () => {

    return(
        <div className={styles.header}>
            <h1>Muhammad Naeem Akhtar</h1>
		    <a href="#footer">Contact</a>
		</div>
    )
}

export default Header;