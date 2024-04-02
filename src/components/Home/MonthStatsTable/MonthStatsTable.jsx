import {useEffect, useState} from 'react';
import {
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    format,
    getDate,
    isToday,
    addMonths,
    isSameMonth,
    isWithinInterval,
} from 'date-fns';
// mui
import {useMediaQuery} from '@mui/material';
import Popover from '@mui/material/Popover';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// components
import DaysGeneralStats from './DaysGeneralStats/DaysGeneralStats.jsx';
// styles
import {
    WrapperMonth,
    HeaderMonth,
    Pagination,
    ButtonPagination,
    Days,
    Day,
    DayPercentage,
    IconWrapper, Percentage,
} from './MonthStatsTable.styled.jsx';

const MonthStatsTable = () => {
    // const [showModal, setShowModal] = useState(false);
    // const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isCurrentMonth, setIsCurrentMonth] = useState(true);

    const startDate = startOfMonth(currentDate);
    const endDate = endOfMonth(currentDate);
    const days = eachDayOfInterval({start: startDate, end: endDate});
    const lastDayNumber = endDate.getDate();

    const mobile = useMediaQuery('(min-width:768px)');

    const formattedDays = days.map((day) => {
        const fullDate = format(day, 'dd/MMMM/yyyy');
        return {
            day: getDate(day),
            isToday: isToday(day),
            fullDate,
        };
    });

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => startOfMonth(addMonths(prevDate, -1)));
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const nextMonth = addMonths(prevDate, 1);
            return endOfMonth(nextMonth);
        });
    };

    // popover
    // const handleOpenModal = (event) => {
    //   const rect = event.target.getBoundingClientRect();
    //   const positionX = rect.left + window.scrollX;
    //   const positionY = rect.top + window.scrollX;
    //   const modalWidth = 280; // Ширина модального вікна
    //   const modalHeight = 188; // Висота модального вікна
    //
    //   let modalX, modalY;
    //
    //   // Перевірка доступної ширини екрану та місця справа
    //   if (window.innerWidth - positionX >= 425) {
    //     modalX = positionX + rect.width - 20; // Модальне вікно зправа від числа
    //   } else if (positionX >= 425) {
    //     modalX = positionX - modalWidth + 20; // Модальне вікно зліва від числа
    //   } else {
    //     modalX = (window.innerWidth - modalWidth) / 2; // Модальне вікно по центру
    //   }
    //
    //   // Перевірка доступної висоти екрану та місця зверху
    //   if (positionY >= modalHeight) {
    //     modalY = positionY - modalHeight; // Модальне вікно зверху від числа
    //   } else {
    //     modalY = positionY + rect.height; // Модальне вікно знизу від числа
    //   }
    //
    //   setModalPosition({ x: modalX, y: modalY });
    //   setShowModal(true);
    // };
    //
    // const handleCloseModal = () => {
    //   setShowModal(false);
    // };

    // popover from mui
    // -----------------------------------------------
    const [anchorEl, setAnchorEl] = useState(null);
    const [popoverValue, setPopoverValue] = useState(null);

    const handlePopoverOpen = (event) => {
        setPopoverValue(event.target.value);
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    // ----------------------------------------------------

    useEffect(() => {
        const now = new Date();
        const startOfCurrentMonth = startOfMonth(now);
        const endOfCurrentMonth = endOfMonth(now);
        setIsCurrentMonth(
            isWithinInterval(currentDate, {
                start: startOfCurrentMonth,
                end: endOfCurrentMonth
            }));
    }, [currentDate]);

    return (
        <WrapperMonth>
            <HeaderMonth>
                <h2>Month</h2>
                <Pagination>
                    <ButtonPagination onClick={handlePrevMonth}>
                        <IconWrapper>
                            <ArrowBackIosIcon/>
                        </IconWrapper>
                    </ButtonPagination>
                    <span>{format(startDate, 'MMMM yyyy')}</span>
                    <ButtonPagination onClick={handleNextMonth}
                                      disabled={isCurrentMonth}
                    >
                        <IconWrapper isCurrentMonth={isCurrentMonth}>
                            <ArrowForwardIosIcon/>
                        </IconWrapper>
                    </ButtonPagination>
                </Pagination>
            </HeaderMonth>
            <Days lastDayNumber={lastDayNumber}>
                {
                    formattedDays.map((item) => {
                            const randomPercentage = Math.round(Math.random() * (10 - 1) + 1) * 10;

                            return (
                                <DayPercentage key={item.day}>
                                    <Day percentage={randomPercentage}
                                         isToday={item.isToday}                                        // id={'btn-month-state-table'}
                                        // popover
                                         aria-owns={open ? 'mouse-over-popover' : undefined}
                                         aria-haspopup="true"
                                         onMouseEnter={handlePopoverOpen}
                                         onMouseLeave={handlePopoverClose}
                                         value={item.fullDate}
                                        // popover
                                    >{item.day}</Day>
                                    <Percentage>{randomPercentage}%</Percentage>
                                </DayPercentage>
                            );
                        },
                    )
                }
            </Days>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: mobile ? 'left' : 'center',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <DaysGeneralStats fullDate={popoverValue}/>
            </Popover>
        </WrapperMonth>
    );
};

export default MonthStatsTable;

// {showModal &&
// // <DaysGeneralStats x={modalPosition.x}
// //        y={modalPosition.y}
// //        fullDate={item.fullDate}
// //        randomPercentage={randomPercentage}
// //        onClose={handleCloseModal}
// // />
// // }