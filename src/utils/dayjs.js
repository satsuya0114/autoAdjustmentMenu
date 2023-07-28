import dayjs from 'dayjs';

// import locales separately
import 'dayjs/locale/ja';
import 'dayjs/locale/en';

// import plugins
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import objectSupport from 'dayjs/plugin/objectSupport';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';

export const initDayjs = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(isSameOrAfter);
  dayjs.extend(objectSupport);
  dayjs.extend(isToday);
  dayjs.extend(isYesterday);
};
