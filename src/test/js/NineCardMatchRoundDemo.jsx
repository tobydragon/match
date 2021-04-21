import NineCardMatchGame from "../../main/js/NineCardMatchGame";
import { NineCardMatchGameModel } from "./data/NineCardMatchObject";

export const NineCardMatchDemo = () => {
    return <NineCardMatchGame model={NineCardMatchGameModel} />;
}

export default NineCardMatchDemo;