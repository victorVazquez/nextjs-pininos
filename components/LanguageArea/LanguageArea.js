import React from "react";
import LanguageSelector from "@victorvazquez/language-selector";
import styles from '../../styles/Home.module.css'

function LanguageArea() {

    return (
        <div className={styles.languageArea}>
            <LanguageSelector />
        </div>
    );
}

export { LanguageArea };