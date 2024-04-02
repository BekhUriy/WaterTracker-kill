// import { MainPageLayout } from '../../components/MainPage/MainPageLayout/MainPageLayout';
// import { TrackerBenefits } from '../../components/MainPage/TrackerBenefits/TrackerBenefits';
// import { WaterBenefits } from '../../components/MainPage/WaterBenefits/WaterBenefits';
import { WelcomeLayout } from './Welcome.styled';
import Main from "../../components/Welcome/Main/Main"

const WelcomePage = () => {
  return (
        <WelcomeLayout>
          <Main />
        </WelcomeLayout>
  );
};

export default WelcomePage;