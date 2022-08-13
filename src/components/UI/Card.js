import "./Card.css";


function Card(props){
    const classes = 'card ' + props.className;
    return(
        
        // hey
        <div className={classes}>{props.children}</div>
    );
}

export default Card;