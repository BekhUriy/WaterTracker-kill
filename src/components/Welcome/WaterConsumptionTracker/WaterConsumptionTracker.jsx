import {
  Button,
  CalendarIcon,
  Container,
  Item,
  ItemText,
  List,
  ListTittle,
  SettingIcon,
  StatisticsIcon,
  SubTittle,
  Tittle,
} from './WaterConsumptionTracker.styled';

const WaterConsumptionTracker = () => {
  return (
    <>
      <Container>
        <Tittle>Water consumption tracker</Tittle>
        <SubTittle>Record daily water intake and track</SubTittle>
        <ListTittle>Tracker Benefits</ListTittle>
        <List>
          <Item>
            <CalendarIcon />
            <ItemText>Habit drive</ItemText>
          </Item>
          <Item>
            <StatisticsIcon />
            <ItemText>View statistics</ItemText>
          </Item>
          <Item>
            <SettingIcon />
            <ItemText>Personal rate setting</ItemText>
          </Item>
        </List>
        <Button type="button">Try tracker</Button>
      </Container>
    </>
  );
};

export default WaterConsumptionTracker;