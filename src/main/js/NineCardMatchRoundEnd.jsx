import { Modal, Button } from "react-bootstrap";

/**
 * 
 * @prop {function} handleClose: a function to call when the window closes
 * @prop {int} model.roundScore
 * @prop {int} model.totalScore 
 * @prop {boolean} model.show 
 */
export const NineCardMatchRoundEnd = (props) => {

    return (
        <Modal centered show={props.model.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Round Complete</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>You scored {props.model.roundScore} points this round,<br/> for a total score of {props.model.totalScore}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={props.handleClose}>Next Level!</Button>
            </Modal.Footer>
        </Modal>
    );
}
