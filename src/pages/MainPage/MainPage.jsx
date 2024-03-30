import { MainPageLayout } from '../../components/MainPage/MainPageLayout/MainPageLayout';
import { TrackerBenefits } from '../../components/MainPage/TrackerBenefits/TrackerBenefits';
import { WaterBenefits } from '../../components/MainPage/WaterBenefits/WaterBenefits';
import { Container } from './MainPage.styled';

export const MainPage = () => {
  return (
    <>
      <MainPageLayout>
        <Container>
          <TrackerBenefits />
          <WaterBenefits />
        </Container>
      </MainPageLayout>
    </>
  );
};
