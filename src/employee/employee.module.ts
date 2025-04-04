import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { Department } from '../department/department.entity';
import { EmployeeResolver } from './employee.resolver'; // Import Resolver

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Department])],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeResolver], // Thêm Resolver vào providers
  exports: [EmployeeService],
})
export class EmployeeModule {}
