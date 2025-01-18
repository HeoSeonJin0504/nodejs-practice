const { createLogger, transports, format } = require("winston");
const { combine, colorize, timestamp, label, json, simple, printf } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = combine(
  label({
    label: "백엔드 맛보기",
  }),
  colorize(),
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  printFormat
);

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "info",
      format: printLogFormat,
    }),
  ],
});

module.exports = logger;
