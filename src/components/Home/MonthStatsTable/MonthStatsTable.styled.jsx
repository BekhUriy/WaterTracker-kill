import styled from '@emotion/styled';

export const WrapperMonth = styled.div`
    width: 264px;
    background-color: var(--background-tracker);

    @media screen and (min-width: 768px) {
        width: 656px;
    }

    @media screen and (min-width: 1158px) {
        width: 544px;
    }
`;

export const HeaderMonth = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h2 {
        font-weight: 500;
        line-height: var(line-height);

        font-size: 24px;

        color: var(--text);
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;

        h2 {
            font-size: 26px;
            line-height: 1.2;
        }
    }
`;

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: var(font-size);
    font-weight: 400;
    line-height: var(line-height);

    color: var(--text-blue);
`;

export const ButtonPagination = styled.button`
    border: none;
    padding: 0;

    color: inherit;
    background-color: transparent;

    &:hover {
        color: #7FAAFD; // todo
    }
`;

export const IconWrapper = styled.div`
    svg {
        color: ${(props) => props.isCurrentMonth ? "transparent" : 'inherit'};
        width: 14px;
        height: 14px;
    }
`;

export const Days = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 50px);
    justify-content: space-between;
    align-items: center;
    gap: 26px;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: ${
                (props) => props.lastDayNumber === 31 ?
                        'repeat(4, 50px)' : 'repeat(3, 50px)'
        };
        gap: 20px;
    }
`;

export const DayPercentage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 32px;
    height: 52px;

    font-weight: var(font-weight);

    color: #7FAAFD;
`;

export const Day = styled.button`
    width: 32px;
    height: 32px;
    padding: 7px 6px;
    border: 1px solid ${({percentage}) => percentage === 100 ? 'var(--background)' : 'var(--orange-color)'};
    border-radius: 20px;
    font-size: 14px;
    line-height: 1.28;

    color: var(--text);
    background: ${({isToday}) => isToday ? '#7FAAFD' : 'var(--background)'}; // todo

    @media screen and (min-width: 768px) {
        width: 34px;
        height: 34px;
        padding: 7px;

        font-size: vat(font-size);
        line-height: var(line-height);
    }

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

export const Percentage = styled.p`
    font-size: 10px;
    line-height: 1.6;

    color: var(--text-passowrd);

    @media screen and (min-width: 768px) {
        font-size: 13px;
        line-height: 1.5;
    }

    @media screen and (min-width: 1158px) {
        font-size: 12px;
    }
`;