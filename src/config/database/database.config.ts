import { registerAs } from '@nestjs/config';

const env = process.env;
export default registerAs('database', () => ({
  name: env.DATABASE_NAME,
}));
