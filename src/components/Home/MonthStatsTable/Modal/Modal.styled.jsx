import styled from '@emotion/styled';

export const ModalContainer = styled.div`
    // position: fixed;
        // left: ${(props) => props.x}px;
        // top: ${(props) => props.y}px;

    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 10px;
    padding: 24px 0 24px 13px;
    width: 280px;
    height: 188px;
    box-shadow: 0 4px 4px 0 rgba(64, 123, 255, 0.3);
    background: #fff;

    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;

    @media screen and (min-width: 768px) {
        padding-left: 16px;
        width: 292px;
        height: 188px;
    }

    @media screen and (min-width: 1440px) {
        width: 292px;
        height: 188px;
    }
`;

export const PopoverContainer = styled.div`
    // position: fixed;
        // left: ${(props) => props.x}px;
        // top: ${(props) => props.y}px;

    div {
        display: flex;
        flex-direction: column;
        gap: 16px;
        border-radius: 10px;
        padding: 24px 0 24px 13px;
        width: 280px;
        height: 188px;
        box-shadow: 0 4px 4px 0 rgba(64, 123, 255, 0.3);
        background: #fff;

        font-weight: 400;
        font-size: 16px;
        line-height: 1.25;

        @media screen and (min-width: 768px) {
            padding-left: 16px;
            width: 292px;
            height: 188px;
        }

        @media screen and (min-width: 1440px) {
            width: 292px;
            height: 188px;
        }
    }

`;

export const DateWrap = styled.p`
    margin: 0; // todo
    color: #407bff; // todo
`;

export const TextWrap = styled.p`
    margin: 0;
    color: #2f2f2f;

    span {
        margin-left: 6px;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.33333;
        color: #407bff;
    }
`;