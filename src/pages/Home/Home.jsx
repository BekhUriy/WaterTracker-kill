import {
    DailyNormaContainer,
  HomeContainer,
  HomeSection,
  StatisticsContainer,
} from './Home.styled.js';

const HomePage = () => {
  return (
    <HomeSection>
      <HomeContainer>
        <DailyNormaContainer>
          //DailyNorma //WaterRatioPanel
        </DailyNormaContainer>
        <StatisticsContainer>
          //TodayWaterList //MonthStatsTable
        </StatisticsContainer>
      </HomeContainer>
    </HomeSection>
  );
};

export default HomePage;
