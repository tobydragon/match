import { CardDeck } from "react-bootstrap";
import SubjectCard from "../../main/js/SubjectCard";
import {SelectedState} from "../../main/js/SubjectCard";

export const SubjectCardDemo = () => {
    return (
        <CardDeck>
            <SubjectCard name="Cat" imageUrl="https://coloringhome.com/coloring/8i6/EMR/8i6EMR5iE.gif" selectedState={SelectedState.NOT_SELECTED} />;
            <SubjectCard name="Cat" imageUrl="https://coloringhome.com/coloring/8i6/EMR/8i6EMR5iE.gif" selectedState={SelectedState.CORRECT} />;
            <SubjectCard name="Cat" imageUrl="https://coloringhome.com/coloring/8i6/EMR/8i6EMR5iE.gif" selectedState={SelectedState.INCORRECT} />;
        </CardDeck>
    );
}

export default SubjectCardDemo;