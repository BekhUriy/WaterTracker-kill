import styled from "@emotion/styled";

export const WrapperMonth = styled.div`
    width: 264px;
    height: 506px;
    background-color: #ecf2ff;

    @media screen and (min-width: 768px) {
        width: 656px;
        height: 340px;
    }

    @media screen and (min-width: 1200px) {
        width: 544px;
        height: 332px;
    }
`;

export const HeaderMonth = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h2 {
        font-size: 24px;
        font-weight: 500;
        line-height: 1.25;
        color: #2f2f2f;
        margin-bottom: 0;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;

        h2 {
            font-size: 26px;
            line-height: 1.2;
        }
    }
`;

export const ButtonPagination = styled.button`
    border: none;
    padding: 0;
    background-color: transparent;
    color: #407bff;

    &:hover {
        color: #7FAAFD;
    }
`;

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;

    color: #407bff;
`;


export const Days = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 50px);
    justify-content: space-between;
    gap: 16px;
    height: 446px;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(4, 50px);
        gap: 20px;
        height: 268px;
    }
`;

export const DayPercentage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.6;
    color: #7FAAFD;

    @media screen and (min-width: 768px ) {
        font-size: 12px;
    }
`;

export const Day = styled.button`
    width: 35px;
    padding: 7px 6px;
    border: 1px solid ${({percentage}) => percentage ? "#fff" : "#ff9d43"};
    border-radius: 20px;

    font-size: 14px;

    color: #2f2f2f;
    background: #fff;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        padding: 7px;
    }

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

export const IconWrapper = styled.div`
    svg {
        color: ${(props) => props.isCurrentMonth ? "#6f6f6c" : "inherit"};
        width: 14px;
        height: 14px;
    }
`;