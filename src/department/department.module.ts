import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { Department } from './department.entity';
import { Employee } from '../employee/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department, Employee])],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
