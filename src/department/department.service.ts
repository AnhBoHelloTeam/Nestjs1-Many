import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';
import { Employee } from '../employee/employee.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  // Tạo phòng ban mới
  async create(name: string, location: string): Promise<Department> {
    const department = this.departmentRepository.create({ name, location });
    return this.departmentRepository.save(department);
  }

  // Lấy danh sách phòng ban
  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find({ relations: ['employees'] });
  }

  // Xóa phòng ban, nhưng kiểm tra trước xem có nhân viên nào trong phòng ban không
  async remove(id: number): Promise<void> {
    const department = await this.departmentRepository.findOne({
      where: { id },
      relations: ['employees'],
    });
    if (!department) {
      throw new NotFoundException('Department not found');
    }
    if (department.employees.length > 0) {
      throw new Error('Cannot delete department with employees');
    }
    await this.departmentRepository.delete(id);
  }

  // Xem chi tiết phòng ban cùng với nhân viên
  async findOne(id: number): Promise<Department> {
    const department = await this.departmentRepository.findOne({
      where: { id },
      relations: ['employees'],
    });
    if (!department) {
      throw new NotFoundException('Department not found');
    }
    return department;
  }
}
