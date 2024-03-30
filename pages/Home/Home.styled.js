const { styled } = require("styled-components");


export const HomeSection = styled.section`
    padding: 24px 20px 40px;
    background-position: center center;
    // додати сюди зображення
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0;
    //width: 100%;
`;

export const DailyNormaContainer = styled.div`

`

export const StatisticsContainer = styled.div`
display: inline-flex;
padding: 24px 8px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
border-radius: 10px;
background: var(--Secondary-color-2, #ECF2FF);
box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.30);

max-width: 280px;
`   
