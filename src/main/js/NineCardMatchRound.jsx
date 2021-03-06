import { Row, CardDeck, Container } from "react-bootstrap";
import SubjectCard from "./SubjectCard";
import {SelectedState} from "./SubjectCard";

export const calcCurrentScore = (cardModels) => {
    const correctCount = cardModels.filter((cardModel)=> cardModel.selectedState === SelectedState.CORRECT).length;
    const incorrectCount = cardModels.filter((cardModel)=> cardModel.selectedState === SelectedState.INCORRECT).length;
    return correctCount - incorrectCount;
}

export const calcSelectedState = (keyCard, cardSelected) => {
    if (keyCard.name.charAt(0) === cardSelected.name.charAt(0)){
        return SelectedState.CORRECT;
    }
    else {
        return SelectedState.INCORRECT;
    }
}

const makeCardFromModel = (cardModel, cardClicked) => {
    return <SubjectCard name={cardModel.name} imageUrl={cardModel.imageUrl} selectedState={cardModel.selectedState} cardClicked={cardClicked} />;
}

export const NineCardMatchRound = (props) => {
    const keyCard = makeCardFromModel(props.model.keyCard, null);
    const cardsToMatch = props.model.cardsToMatch.map((cardModel)=>makeCardFromModel(cardModel, props.cardSelected));
    return (
        <Container>
            <Row className="header">
                <h1>{"Current Round Score: " + calcCurrentScore(props.model.cardsToMatch)+ "\t"}</h1>
            </Row>
            <Row>
                <Container>
                    <CardDeck >
                        {cardsToMatch.slice(0,3)}
                    </CardDeck>
                </Container>
            </Row>
            <Row >
                <Container>
                    <CardDeck>
                        {[cardsToMatch[3],keyCard,cardsToMatch[4]]}
                    </CardDeck>
                </Container>
            </Row>
            <Row >
                <Container>
                    <CardDeck>
                        {cardsToMatch.slice(5)}
                    </CardDeck>
                </Container>
            </Row>
        </Container>
    );
}

export default NineCardMatchRound;