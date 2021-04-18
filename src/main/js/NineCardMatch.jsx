import { useState } from "react";
import { Row, CardDeck, Container } from "react-bootstrap";
import SubjectCard from "./SubjectCard";
import {SelectedState} from "./SubjectCard";

const makeCardFromModel = (cardModel, cardClicked) => {
    return <SubjectCard name={cardModel.name} imageUrl={cardModel.imageUrl} selectedState={cardModel.selectedState} cardClicked={cardClicked} />;
}

export const makeNewModelsWithSelectedState = (cardModel, selectedState) => {
    let newModel = JSON.parse(JSON.stringify(cardModel));
    newModel.selectedState=selectedState;
    return newModel;
}

export const buildRandomizedArray = (arrayToRandomize) => {
    return arrayToRandomize
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
}

const calcSelectedState = (keyCard, cardSelected) => {
    if (keyCard.name.charAt(0) === cardSelected.name.charAt(0)){
        return SelectedState.CORRECT;
    }
    else {
        return SelectedState.INCORRECT;
    }
}

export const NineCardMatch = (props) => {

    const randomizedCardModels= buildRandomizedArray(props.model.cardsToMatch).map((cardModel)=>makeNewModelsWithSelectedState(cardModel, SelectedState.NOT_SELECTED));
    const [cardModels, setCardModels] = useState(randomizedCardModels);
    
    const cardSelected = (cardName) => {
        const newCards = cardModels.map((cardModel)=> (cardModel.name!==cardName) ? cardModel: makeNewModelsWithSelectedState(cardModel, calcSelectedState(props.model.keyCard, cardModel)));
        setCardModels(newCards);
    }
        
    const keyCard = makeCardFromModel(props.model.keyCard, SelectedState.NOT_SELECTED);
    const cardsToMatch = cardModels.map((cardModel)=>makeCardFromModel(cardModel, cardSelected));
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