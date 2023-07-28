import { detect } from 'detect-browser';
import logger from 'universal-logger';
import { styleable } from 'universal-logger-browser';

const browser = detect();
const log = logger().use(
  styleable({
    colorized: browser && ['ie', 'edge'].indexOf(browser.name) < 0,
    showSource: true,
    showTimestamp: true,
    style: {
      level: {
        system: {
          backgroundColor: '#222',
          color: '#fff',
          lineHeight: 2,
          padding: '2px 5px',
        },
      },
    },
  }),
);

export default log;
