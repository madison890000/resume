import React from 'react';
import styles from './index.module.scss';

interface HeaderProps {
    firstName: string;
    lastName: string;
    email: string;
    cellphone: string;
}

const Header = ({ firstName, lastName, email, cellphone }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <h1>{firstName} {lastName}</h1>
            <div className={styles.basicInfo}>
                <div><span className={styles.email}>{email}</span></div>
                <div><span className={styles.cellphone}>{cellphone}</span></div>
            </div>
        </header>
    );
}

export default Header;
