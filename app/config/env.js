const env = {
  database: 'postgres',
  username: 'postgres',
  password: 'ControlVentas2025',
  host: 'aws-1-us-east-1.pooler.supabase.com', // Cambiado para usar Transaction Pooler
  dialect: 'postgres',
  port: 6543, // Cambiado para usar el puerto del Transaction Pooler
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;