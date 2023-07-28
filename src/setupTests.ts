// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { initDayjs } from '@/utils/dayjs';
import { setUpResizeObserver } from '@/utils/testUtil';

initDayjs();

setUpResizeObserver();
