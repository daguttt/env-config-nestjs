const env = process.env;

export default () => ({
  port: env.APP_PORT,
});
