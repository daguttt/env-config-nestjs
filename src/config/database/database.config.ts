const env = process.env;
export default () => ({
  database: {
    name: env.DATABASE_NAME,
  },
});
