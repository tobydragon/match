import { Card } from "react-bootstrap";

export const SubjectCard = (props) => {
    return (
        <Card style={{ width: '10rem' }}>
            <Card.Img src={props.imageUrl} alt={props.name} />
            <Card.Title align="center">{props.name}</Card.Title>
        </Card>
    );
}

export default SubjectCard;