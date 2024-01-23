import { useState } from "react"

export const Book = (props) => {

   
    const[highlighted, setHighlighted] = useState(false);

    const clickHandler = () => {
        setHighlighted(state => !state);
    };

    let style = {};
    if (highlighted) {
        style.backgroundColor = 'red'
    }

    return(
        <article onClick={clickHandler} style={style}>
            <h2>{props.title}</h2>
            <div>{props.author}</div>
            <div>{props.year}</div>
        </article>
    )
}