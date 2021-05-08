import './SubjectCard.css';

import { Card } from "react-bootstrap";

//values are css classNames, see SubjectCard.css
export const SelectedState = {
    NOT_SELECTED: "notSelected",
    CORRECT: "correct",
    INCORRECT: "incorrect"
}

export const SubjectCard = (props) => {

    const cardClicked = (e) => {
        if (props.cardClicked){
            props.cardClicked(props.name);
        }
    }

    return (
        <Card className={props.selectedState} onClick={cardClicked}>
            <Card.Img src={props.imageUrl} alt={props.name} />
            <Card.Title className="SubjectCard" align="center">{props.name}</Card.Title>
        </Card>
    );
}

export default SubjectCard;