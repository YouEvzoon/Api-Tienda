const env = {
  database: 'postgres',
  username: 'postgres',
  password: 'ControlVentas2025', // Contraseña actual
  host: 'aws-1-us-east-1.pooler.supabase.com', // Host del Session Pooler
  dialect: 'postgres',
  port: 5432, // Puerto del Session Pooler
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;