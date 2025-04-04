import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { Department } from '../department/department.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto'; // DTO để cập nhật nhân viên

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  // Tạo nhân viên mới
  async create(employeeData: CreateEmployeeDto, departmentId: number): Promise<Employee> {
    const department = await this.departmentRepository.findOne({ where: { id: departmentId } });

    if (!department) {
      throw new Error(`Department with ID ${departmentId} not found`);
    }

    const employee = this.employeeRepository.create({
      ...employeeData,
      department,
    });

    return this.employeeRepository.save(employee);
  }

  // Lấy tất cả nhân viên
  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  // Lấy thông tin chi tiết nhân viên theo id
  async findOneById(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({ where: { id } });
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  }

  // Cập nhật thông tin nhân viên
  async update(id: number, employeeData: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.findOneById(id);
    Object.assign(employee, employeeData);  // Cập nhật thông tin nhân viên
    return this.employeeRepository.save(employee);
  }

  // Xoá nhân viên theo id
  async remove(id: number): Promise<void> {
    const employee = await this.findOneById(id);
    await this.employeeRepository.remove(employee);
  }
}
