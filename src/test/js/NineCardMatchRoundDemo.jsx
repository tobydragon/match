import NineCardMatchRound from "../../main/js/NineCardMatchRound";
import { NineCardMatchGameModel } from "./data/NineCardMatchObject";

export const NineCardMatchDemo = () => {
    return <NineCardMatchRound model={NineCardMatchGameModel} />;
}

export default NineCardMatchDemo;