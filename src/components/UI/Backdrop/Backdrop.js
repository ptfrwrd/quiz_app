import React from "react"
import styles from './Backdrop.module.scss'

const Backdrop = props => <div className={styles.BackDrop} onClick={props.onClick}/>;
export default Backdrop;