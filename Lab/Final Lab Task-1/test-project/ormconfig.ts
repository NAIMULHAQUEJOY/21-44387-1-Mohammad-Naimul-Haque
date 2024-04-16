import { User } from './src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'atpdb',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  entities: [User],
  synchronize: true,
};

export default config;
