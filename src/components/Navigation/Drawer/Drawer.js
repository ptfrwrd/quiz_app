import React, {Component} from "react";
import styles from "./Drawer.module.scss"
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from 'react-router-dom'
const links = [
    {
        to: '/',
        label: 'Список',
        exact: true,
    },
    {
        to: '/auth',
        label: 'Авторизация',
        exact: false,
    },
    {
        to: '/quiz-creator',
        label: 'Создать тест',
        exact: false,
    },
];

class Drawer extends Component{
    clickHandler = () => this.props.onClose();
    renderLinks (){
        return links.map((link, index) => {
            return(
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={styles.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    render() {
        const classes = [styles.Drawer];
        if (!this.props.isOpen){
            classes.push(styles.close)
        }
        return(
            <React.Fragment>
                <nav className={classes.join(' ')}>
                    <ul>
                        {this.renderLinks ()}
                    </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}

export default Drawer;