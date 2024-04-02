import WaterConsumptionTracker from '../WaterConsumptionTracker/WaterConsumptionTracker';
import WhyDrinkWater from '../WhyDrinkWater/WhyDrinkWater';
import { WelcomeContentContainer } from './Main.styled';

const Main = () => {
  return (
    <WelcomeContentContainer>
      {/* <Container> */}
        <WaterConsumptionTracker />
        <WhyDrinkWater />
      {/* </Container> */}
    </WelcomeContentContainer>
  );
};

export default Main;
