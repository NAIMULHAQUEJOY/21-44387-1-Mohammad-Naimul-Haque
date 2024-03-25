// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'atpdb',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      entities: [User], // Add Employee and Bonus to the entities array
      synchronize: true,
      logging: true, // Add this line to enable logging
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}