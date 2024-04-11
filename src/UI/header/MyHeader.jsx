import React from "react";
import classes from './MyHeader.module.css'
import { Link } from "react-router-dom";

const MyHeader =({children})=>{
    return(
        <div className={classes.myhead}>
            {children }
            <div className ='navbar'>
                <Link to ="/activetasks" className="navbarEl">Активні задачі</Link>
                <Link to ="/completedtasks"className="navbarEl">Виконанні задачі</Link>
            </div>
        </div>
    )
}

export default MyHeader;
