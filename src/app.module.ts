import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; // Import ApolloDriver
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { AuthModule } from './auth/auth.module';

import { Employee } from './employee/employee.entity';
import { Department } from './department/department.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '21082004',
      database: 'employee_management',
      entities: [Employee, Department],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    EmployeeModule,
    DepartmentModule,
    AuthModule,
  ],
})
export class AppModule {}
