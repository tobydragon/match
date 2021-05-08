import { Card } from "react-bootstrap";

export const SelectedState = {
    NOT_SELECTED: "light",
    CORRECT: "success",
    INCORRECT: "danger"
}

export const SubjectCard = (props) => {

    const cardClicked = (e) => {
        if (props.cardClicked){
            props.cardClicked(props.name);
        }
    }

    return (
        <Card onClick={cardClicked} bg={props.selectedState} >
            <Card.Img src={props.imageUrl} alt={props.name} />
            {/* <Card.Title className="SubjectCard" align="center">{props.name}</Card.Title> */}
        </Card>
    );
}

export default SubjectCard;