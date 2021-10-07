import moment from 'moment';
import { useEffect, useState } from 'react';
import {
  DateItem,
  DateWrapper,
  HourMinutes,
  Seconds,
  SecondsWrapper,
  TimeWrapper,
  WatchWrapper,
} from './styles';

const DateComponent = () => {
  const [date, setDate] = useState({
    dateDay: moment().format('dddd, DD MMMM YYYY'),
    time: {
      hourMinutes: moment().format('hh : mm : '),
      seconds: moment().format('ss'),
      ampm: moment().format('A'),
    },
  });

  useEffect(() => {
    let interval = setTimeout(() => {
      const newDate = {
        dateDay: moment().format('dddd, DD MMMM YYYY'),
        time: {
          hourMinutes: moment().format('hh : mm : '),
          seconds: moment().format('ss'),
          ampm: moment().format('A'),
        },
      };
      setDate(newDate);

      return () => {
        clearTimeout(interval);
      };
    }, 1000);
  }, [date]);

  const { dateDay, time } = date;

  return (
    <WatchWrapper>
      <DateWrapper>
        <DateItem>{dateDay}</DateItem>
      </DateWrapper>
      <TimeWrapper>
        <HourMinutes>{time.hourMinutes}</HourMinutes>
        <SecondsWrapper>
          <Seconds>{time.ampm}</Seconds>
          <Seconds>{time.seconds}</Seconds>
        </SecondsWrapper>
      </TimeWrapper>
    </WatchWrapper>
  );
};

export default DateComponent;
