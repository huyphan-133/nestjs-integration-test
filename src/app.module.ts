import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: 'root',
      password: "my-secret-pw",
      database: "integration-test",
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true
    }),
    UserModule,
    TodoModule,
  ],
  providers: [
  ],
  exports: [TypeOrmModule]
})
export class AppModule { }
