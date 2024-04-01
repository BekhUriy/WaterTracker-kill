import {
  CrossbarBox,
  CrossbarBoxRange,
  CrossbarButton,
  CrossbarInput,
  CrossbarProcentSpan,
  CrossbarSpanMiddle,
  CrossbarSpanSEnd,
  CrossbarSpanStart,
  CrossbarText,
} from './Crossbar.styled';
import PlusCircleOutlineIcon from './PlusCircleOutlineIcon';

const Crossbar = () => {
  const waterIntakePercentage = 50;

  return (
    <CrossbarBox>
      <CrossbarBoxRange>
        <CrossbarText>Today</CrossbarText>
        <CrossbarInput type="range" percentage={waterIntakePercentage} />
        <CrossbarProcentSpan>
          <CrossbarSpanStart>0%</CrossbarSpanStart>
          <CrossbarSpanMiddle id="WaterMark">
            {waterIntakePercentage}%
          </CrossbarSpanMiddle>
          <CrossbarSpanSEnd>100%</CrossbarSpanSEnd>
        </CrossbarProcentSpan>
      </CrossbarBoxRange>
      <CrossbarButton>
        <PlusCircleOutlineIcon />
        Add Water
      </CrossbarButton>
    </CrossbarBox>
  );
};

export default Crossbar;
