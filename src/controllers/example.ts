import logger from "../logger";

function exampleMethod(body: string) {
  logger.info(`Example controller triggered with body ${body}`);
  return true;
}

function exampleGet() {
  logger.info("Example get triggered");
  return true;
}

const self = {
  exampleGet,
  exampleMethod,
};

export default self;
