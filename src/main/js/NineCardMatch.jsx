import { Row, CardDeck, Container } from "react-bootstrap";
import SubjectCard from "./SubjectCard";

export const NineCardMatch = (props) => {
    const cards = ["","",""].map(()=><SubjectCard name="Cat" imageUrl="https://coloringhome.com/coloring/8i6/EMR/8i6EMR5iE.gif"/>);

    return (
        <Container>
          <Row >
            <CardDeck>
                {cards}
            </CardDeck>
            </Row>
            <Row >
                <CardDeck>
                    {cards}
                </CardDeck>
            </Row>
            <Row>
            <CardDeck>
                {cards}
            </CardDeck>
            </Row>  
        </Container>
        
        
    );

}

export default NineCardMatch;