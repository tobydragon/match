import { useState } from "react";
import { Jumbotron, Row, Container } from "react-bootstrap";

import NineCardMatchRound, { calcCurrentScore, calcSelectedState } from "./NineCardMatchRound";
import {SelectedState} from "./SubjectCard";
import { NineCardMatchGameModel } from "../../test/js/data/NineCardMatchObject"

export const createNineCardMatchRoundModel = (cardModels) => {
    const keyCardModel = createKeyCardModel();
    return {
        keyCard:keyCardModel ,
        cardsToMatch: create8otherCardModels(cardModels, keyCardModel)
    };
}

export const createKeyCardModel = () => {
    const possibleLetters = ["A", "B", "C", "D", "E", "F"];
    const letter = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
    return makeNewModelsWithSelectedState({name:letter, imageUrl:"https://www.freebiefindingmom.com/wp-content/uploads/2020/10/Printable_Bubble_Letters_Flower_Letter_"+letter+"-1.jpg"}, SelectedState.NOT_SELECTED);
}

export const create8otherCardModels = (cardModels, keyCardModel) => {
    const matchingCardCount = 4;
    const matchingCards = buildRandomizedArray(cardModels.filter((cardModel)=> calcSelectedState(keyCardModel, cardModel) === SelectedState.CORRECT)).slice(0, matchingCardCount);
    const otherCount = 8-matchingCards.length;
    const otherCards = buildRandomizedArray(cardModels.filter((cardModel)=> calcSelectedState(keyCardModel, cardModel) !== SelectedState.CORRECT)).slice(0, otherCount);
    return buildRandomizedArray(matchingCards.concat(otherCards)).map((cardModel)=>makeNewModelsWithSelectedState(cardModel, SelectedState.NOT_SELECTED));
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

export const selectedAllCorrect = (keyCardModel, cardModelsToMatch) => {
    return cardModelsToMatch
        .filter((cardModel)=> cardModel.selectedState === SelectedState.NOT_SELECTED)
        .filter((cardModel)=> calcSelectedState(keyCardModel, cardModel) === SelectedState.CORRECT)
        .length === 0;
}

export const NineCardMatchGame = (props) => {
    const [score, setScore] = useState(0);
    const [roundModel, setRoundModel] = useState(createNineCardMatchRoundModel(NineCardMatchGameModel.cardsToMatch));
    
    const cardSelected = (cardName) => {
        const newCards = roundModel.cardsToMatch.map((cardModel)=> (cardModel.name!==cardName) ? cardModel: makeNewModelsWithSelectedState(cardModel, calcSelectedState(roundModel.keyCard, cardModel)));
        if (selectedAllCorrect(roundModel.keyCard, newCards)){
            setScore(score+calcCurrentScore(newCards));
            setRoundModel(createNineCardMatchRoundModel(NineCardMatchGameModel.cardsToMatch));
        }
        else {
            setRoundModel({keyCard: roundModel.keyCard, cardsToMatch: newCards});
        }
    }

    return (
        <Container>
            <Row className="header">
                <h1>{"Overall Score: " + score}</h1>
            </Row>
            <NineCardMatchRound model={roundModel} cardSelected={cardSelected}/>
        </Container>
    );
}

export default NineCardMatchGame;