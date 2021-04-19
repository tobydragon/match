import { useState } from "react";
import NineCardMatchRound from "./NineCardMatchRound";
import { NineCardMatchGameModel } from "../../test/data/NineCardMatchObject";


export const NineCardMatchGame = (props) => {
    const [score, setScore] = useState(score);
    const [roundModel, setRoundModel] = useState(NineCardMatchGameModel.model);

    return (
        <Container>
            <Jumbotron>
                <Row>
                    <Col className="align-items-center">
                        <Row className="justify-content-center align-items-center">
                            <h1>{"Overall Score: " + score}</h1>
                        </Row>
                    </Col>
                </Row>
            </Jumbotron>
            <NineCardMatchRound model={roundModel} />
        </Container>
    );
}