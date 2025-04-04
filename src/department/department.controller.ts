import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  // Lấy danh sách phòng ban
  @Get()
  async findAll() {
    console.log('Đang lấy danh sách phòng ban...');
    try {
      const departments = await this.departmentService.findAll();
      console.log('Danh sách phòng ban:', departments);
      return departments;
    } catch (error) {
      console.error('Lỗi khi lấy danh sách phòng ban:', error);
      throw new Error('Không thể lấy danh sách phòng ban. Vui lòng thử lại sau.');
    }
  }

  // Thêm phòng ban mới
  @Post()
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    console.log('Đang tạo mới phòng ban với dữ liệu:', createDepartmentDto);
    try {
      const department = await this.departmentService.create(
        createDepartmentDto.name,
        createDepartmentDto.location,
      );
      console.log('Phòng ban đã được tạo:', department);
      return department;
    } catch (error) {
      console.error('Lỗi khi tạo phòng ban:', error);
      throw new Error('Không thể tạo phòng ban. Vui lòng kiểm tra lại dữ liệu.');
    }
  }

  // Xóa phòng ban theo id
  @Delete(':id')
  async remove(@Param('id') id: number) {
    console.log(`Đang xoá phòng ban với ID: ${id}`);
    try {
      const result = await this.departmentService.remove(id);
      console.log(`Phòng ban với ID ${id} đã được xoá`);
      return result;
    } catch (error) {
      console.error(`Lỗi khi xoá phòng ban với ID ${id}:`, error);
      throw new Error(`Không thể xoá phòng ban với ID ${id}. Vui lòng thử lại sau.`);
    }
  }

  // Xem chi tiết phòng ban
  @Get(':id')
  async findOne(@Param('id') id: number) {
    console.log(`Đang tìm phòng ban với ID: ${id}`);
    try {
      const department = await this.departmentService.findOne(id);
      console.log('Phòng ban tìm thấy:', department);
      return department;
    } catch (error) {
      console.error(`Lỗi khi tìm phòng ban với ID ${id}:`, error);
      throw new Error(`Không tìm thấy phòng ban với ID ${id}. Vui lòng kiểm tra lại.`);
    }
  }
}
