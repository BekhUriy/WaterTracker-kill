import {useEffect, useState} from "react";
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
} from "date-fns";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import {
    WrapperMonth,
    HeaderMonth,
    Pagination,
    ButtonPagination,
    Days,
    Day,
    DayPercentage,
    IconWrapper,
} from "./MonthStatsTable.styled.jsx";
import Modal from "./Modal/Modal.jsx";

const MonthStatsTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalPosition, setModalPosition] = useState({x: 0, y: 0});
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isCurrentMonth, setIsCurrentMonth] = useState(true);

    const startDate = startOfMonth(currentDate);
    const endDate = endOfMonth(currentDate);
    const days = eachDayOfInterval({start: startDate, end: endDate});

    const formattedDays = days.map((day) => {
        const fullDate = format(day, "dd/MMMM/yyyy");
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

    const handleOpenModal = (event) => {
        const rect = event.target.getBoundingClientRect();
        const positionX = rect.left + window.scrollX;
        const positionY = rect.top + window.scrollX;
        const modalWidth = 280; // Ширина модального вікна
        const modalHeight = 188; // Висота модального вікна

        let modalX, modalY;

        // Перевірка доступної ширини екрану та місця справа
        if (window.innerWidth - positionX >= 425) {
            modalX = positionX + rect.width - 20; // Модальне вікно зправа від числа
        } else if (positionX >= 425) {
            modalX = positionX - modalWidth + 20; // Модальне вікно зліва від числа
        } else {
            modalX = (window.innerWidth - modalWidth) / 2; // Модальне вікно по центру
        }

        // Перевірка доступної висоти екрану та місця зверху
        if (positionY >= modalHeight) {
            modalY = positionY - modalHeight; // Модальне вікно зверху від числа
        } else {
            modalY = positionY + rect.height; // Модальне вікно знизу від числа
        }

        setModalPosition({x: modalX, y: modalY});
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const now = new Date();
        const startOfCurrentMonth = startOfMonth(now);
        const endOfCurrentMonth = endOfMonth(now);
        setIsCurrentMonth(
            isWithinInterval(currentDate, {start: startOfCurrentMonth, end: endOfCurrentMonth}));
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
                    <span>{format(startDate, "MMMM yyyy")}</span>
                    <ButtonPagination onClick={handleNextMonth}
                                      disabled={isCurrentMonth}
                    >
                        <IconWrapper isCurrentMonth={isCurrentMonth}>
                            <ArrowForwardIosIcon/>
                        </IconWrapper>
                    </ButtonPagination>
                </Pagination>
            </HeaderMonth>
            <Days>
                {
                    formattedDays.map((item) => {
                            const randomPercentage = Math.round(Math.random() * (10 - 1) + 1) * 10;
                            const percentage = randomPercentage === 100;

                            return (
                                <DayPercentage key={item.day}>
                                    <Day percentage={percentage}
                                         onClick={handleOpenModal}
                                         id={"btn-month-state-table"}
                                    >{item.day}</Day>
                                    <span>{randomPercentage}%</span>
                                    {showModal && <Modal x={modalPosition.x}
                                                         y={modalPosition.y}
                                                         fullDate={item.fullDate}
                                                         randomPercentage={randomPercentage}
                                                         onClose={handleCloseModal}
                                    />}
                                </DayPercentage>
                            );
                        },
                    )
                }
            </Days>
        </WrapperMonth>
    );
};

export default MonthStatsTable;