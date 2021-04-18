import {buildRandomizedArrayWithSelectedState} from "../../main/js/NineCardMatch";
import { NineCardMatchGameModel } from "./data/NineCardMatchObject"

describe('NineCardMatch', () => {
    test('buildRandomizedArrayWithSelectedState', () => {
        console.log(buildRandomizedArrayWithSelectedState(NineCardMatchGameModel.cardsToMatch));
    });
});