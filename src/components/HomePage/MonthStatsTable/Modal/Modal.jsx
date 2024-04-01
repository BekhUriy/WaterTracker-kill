import {DateWrap, ModalContainer, TextWrap} from "./Modal.styled.jsx";
import {useEffect} from "react";

const Modal = ({x, y, randomPercentage, fullDate, onClose}) => {
    const date = fullDate.split("/");

    console.log(date);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest("#btn-month-state-table")) {
                onClose();
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [onClose]);

    return (
        <ModalContainer x={x}
                        y={y}
        >
            <DateWrap>{date[0]}, {date[1]}</DateWrap>
            <TextWrap>Daily norma:<span>2L</span></TextWrap>
            <TextWrap>Fulfillment of the daily norm:<span>{randomPercentage}%</span></TextWrap>
            <TextWrap>How many servings of water:<span>6</span></TextWrap>
        </ModalContainer>
    );
};

export default Modal;