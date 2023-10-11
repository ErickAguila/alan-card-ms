export const configVar = () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: Number(process.env.PORT) || 3000,
  NODE_NAME: process.env.NODE_ENV,
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: process.env.DB_SYNC,
  },
});
