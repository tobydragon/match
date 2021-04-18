import {buildRandomizedArray, makeNewModelsWithSelectedState, calcCurrentScore} from "../../main/js/NineCardMatch";
import { SelectedState } from "../../main/js/SubjectCard";
import { NineCardMatchGameModel } from "./data/NineCardMatchObject"

describe('NineCardMatch', () => {
    test('calcCurrentScore1', () => {
        //make some of each state
        const corrects = NineCardMatchGameModel.cardsToMatch.slice(0, 2).map((card)=> makeNewModelsWithSelectedState(card, SelectedState.CORRECT));
        const incorrects = NineCardMatchGameModel.cardsToMatch.slice(2, 5).map((card)=> makeNewModelsWithSelectedState(card, SelectedState.INCORRECT));
        const unchosen = NineCardMatchGameModel.cardsToMatch.slice(5, 8).map((card)=> makeNewModelsWithSelectedState(card, SelectedState.NOT_SELECTED));
        //make a randomized list of them
        const allRandom = buildRandomizedArray([].concat(corrects, incorrects, unchosen));
        // console.log(allRandom);
        expect(calcCurrentScore(allRandom)).toBe(-1);
    });
    test('calcCurrentScore2', () => {
        //make some of each state
        const corrects = NineCardMatchGameModel.cardsToMatch.slice(0, 4).map((card)=> makeNewModelsWithSelectedState(card, SelectedState.CORRECT));
        const incorrects = NineCardMatchGameModel.cardsToMatch.slice(5, 6).map((card)=> makeNewModelsWithSelectedState(card, SelectedState.INCORRECT));
        const unchosen = NineCardMatchGameModel.cardsToMatch.slice(6, 8).map((card)=> makeNewModelsWithSelectedState(card, SelectedState.NOT_SELECTED));
        //make a randomized list of them
        const allRandom = buildRandomizedArray([].concat(corrects, incorrects, unchosen));
        // console.log(allRandom);
        expect(calcCurrentScore(allRandom)).toBe(3);
    });
    test('calcCurrentScore3', () => {
        //make some of each state
        const corrects = NineCardMatchGameModel.cardsToMatch.slice(0, 2).map((card)=> makeNewModelsWithSelectedState(card, SelectedState.CORRECT));
        const incorrects = NineCardMatchGameModel.cardsToMatch.slice(2, 8).map((card)=> makeNewModelsWithSelectedState(card, SelectedState.INCORRECT));
        //make a randomized list of them
        const allRandom = buildRandomizedArray([].concat(corrects, incorrects));
        // console.log(allRandom);
        expect(calcCurrentScore(allRandom)).toBe(-4);
    });
    test('calcCurrentScore4', () => {
        const unchosen = NineCardMatchGameModel.cardsToMatch.slice(0, 8).map((card)=> makeNewModelsWithSelectedState(card, SelectedState.NOT_SELECTED));
        //make a randomized list of them
        const allRandom = buildRandomizedArray(unchosen);
        // console.log(allRandom);
        expect(calcCurrentScore(allRandom)).toBe(0);

    });
});