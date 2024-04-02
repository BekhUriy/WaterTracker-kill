import {DateWrap, ModalContainer, TextWrap} from './DaysGeneralStats.styled.jsx';

const DaysGeneralStats = ({fullDate}) => {
    const date = fullDate.split('/');
    const dailyNorma = '2L';
    const percentageDailyNorma = '60';
    const servingsOfWater = 6;

    return (
        <ModalContainer>
            <DateWrap>{date[0]}, {date[1]}</DateWrap>
            <TextWrap>Daily norma:<span>{dailyNorma}</span></TextWrap>
            <TextWrap>Fulfillment of the daily norm:<span>{percentageDailyNorma}%</span></TextWrap>
            <TextWrap>How many servings of water:<span>{servingsOfWater}</span></TextWrap>
        </ModalContainer>
    );
};

export default DaysGeneralStats;