import React from "react";
import './card-list.styles.css';

export const CardList = (props) => {
    return (
        <div className="cardList">{props.children}</div>
    );
}