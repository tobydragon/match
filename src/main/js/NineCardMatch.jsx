import { useState } from "react";
import { Row, CardDeck, Container } from "react-bootstrap";
import SubjectCard from "./SubjectCard";
import {SelectedState} from "./SubjectCard";

const makeCardFromModel = (cardModel, selectedState, cardClicked) => {
    return <SubjectCard name={cardModel.name} imageUrl={cardModel.imageUrl} selectedState={selectedState} cardClicked={cardClicked} />;
}

const buildRandomizedArray = (arrayToRandomize) => {
    return arrayToRandomize
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
}

const calcSelectedState = (keyCard, cardSelected) => {
    if (keyCard.props.name.charAt(0) === cardSelected.props.name.charAt(0)){
        return SelectedState.CORRECT;
    }
    else {
        return SelectedState.INCORRECT;
    }
}

export const NineCardMatch = (props) => {
    
    const cardSelected = (cardName) => {
        const newCards = cardsToMatch.map((card)=> (card.props.name!==cardName) ? card: makeCardFromModel({name: card.props.name, imageUrl:card.props.imageUrl}, calcSelectedState(keyCard, card), cardSelected));
        setCardsToMatch(newCards); 
    }

    //randomize model array
    const cardModels = buildRandomizedArray(props.model.cardsToMatch);
        
    const keyCard = makeCardFromModel(props.model.keyCard, SelectedState.NOT_SELECTED);
    const [cardsToMatch, setCardsToMatch] = useState(cardModels.map((cardModel)=>makeCardFromModel(cardModel, SelectedState.NOT_SELECTED, cardSelected)));

    return (
        <Container>
          <Row >
            <CardDeck className="py-2">
                {cardsToMatch.slice(0,3)}
            </CardDeck>
            </Row>
            <Row >
                <CardDeck className="py-2">
                    {[cardsToMatch[3],keyCard,cardsToMatch[4]]}
                </CardDeck>
            </Row>
            <Row >
            <CardDeck className="py-2">
                {cardsToMatch.slice(5)}
            </CardDeck>
            </Row>  
        </Container>
        
        
    );

}

export default NineCardMatch;