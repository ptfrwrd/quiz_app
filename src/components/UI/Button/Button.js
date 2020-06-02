import React from "react";
import styles from './Button.module.scss'

const Button = props => {
    const cls = [
        styles.Button
    ];
    return (
        <button
        onClick={props.onClick}
        className={cls[0]}
        disabled={props.disabled}
        >
            <a>{props.children}</a>
        </button>
    )
}

export default Button