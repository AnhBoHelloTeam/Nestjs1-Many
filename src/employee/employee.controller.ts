import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';  // DTO để cập nhật thông tin nhân viên

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // Lấy danh sách nhân viên
  @Get()
  async findAll() {
    console.log('Đang lấy danh sách nhân viên...');
    try {
      const employees = await this.employeeService.findAll();
      console.log('Danh sách nhân viên:', employees); // Hiển thị danh sách nhân viên trên console
      return employees; // Trả về danh sách nhân viên
    } catch (error) {
      console.error('Lỗi khi lấy danh sách nhân viên:', error); // Log lỗi nếu có
      throw new Error('Không thể lấy danh sách nhân viên. Vui lòng thử lại sau.');
    }
  }

  // Lấy thông tin chi tiết nhân viên theo id
  @Get(':id')
  async findOne(@Param('id') id: number) {
    console.log(`Đang tìm nhân viên với ID: ${id}`);
    try {
      const employee = await this.employeeService.findOneById(id);
      console.log('Nhân viên tìm thấy:', employee); // Hiển thị thông tin nhân viên tìm được
      return employee; // Trả về thông tin chi tiết nhân viên
    } catch (error) {
      console.error(`Lỗi khi tìm nhân viên với ID ${id}:`, error); // Log lỗi nếu có
      throw new Error(`Không tìm thấy nhân viên với ID ${id}. Vui lòng kiểm tra lại.`);
    }
  }

  // Thêm nhân viên mới
  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    console.log('Đang tạo mới nhân viên với dữ liệu:', createEmployeeDto); // Hiển thị dữ liệu nhân viên cần tạo
    try {
      const employee = await this.employeeService.create(
        createEmployeeDto,
        createEmployeeDto.departmentId,
      );
      console.log('Nhân viên đã được tạo:', employee); // Log thông tin nhân viên vừa được tạo
      return employee; // Trả về thông tin nhân viên mới được tạo
    } catch (error) {
      console.error('Lỗi khi tạo nhân viên:', error); // Log lỗi nếu có
      throw new Error('Không thể tạo nhân viên. Vui lòng kiểm tra lại dữ liệu.');
    }
  }

  // Cập nhật thông tin nhân viên theo id
  @Put(':id') // Đảm bảo @Put(':id') trùng khớp với URL
  async update(
    @Param('id') id: number,
    @Body() updateEmployeeDto: UpdateEmployeeDto, // Nhận dữ liệu cần cập nhật từ body
  ) {
    console.log(`Đang cập nhật thông tin nhân viên với ID: ${id} với dữ liệu:`, updateEmployeeDto); // Hiển thị dữ liệu cập nhật
    try {
      const updatedEmployee = await this.employeeService.update(id, updateEmployeeDto);
      console.log('Nhân viên đã được cập nhật:', updatedEmployee); // Log thông tin nhân viên sau khi cập nhật
      return updatedEmployee; // Trả về thông tin nhân viên sau khi cập nhật
    } catch (error) {
      console.error(`Lỗi khi cập nhật nhân viên với ID ${id}:`, error); // Log lỗi nếu có
      throw new Error(`Không thể cập nhật nhân viên với ID ${id}. Vui lòng thử lại sau.`);
    }
  }

  // Xoá nhân viên theo id
  @Delete(':id')
  async remove(@Param('id') id: number) {
    console.log(`Đang xoá nhân viên với ID: ${id}`);
    try {
      await this.employeeService.remove(id);
      console.log(`Nhân viên với ID ${id} đã được xoá`); // Log thông tin sau khi xoá nhân viên
      return { message: `Nhân viên với ID ${id} đã được xoá thành công.` }; // Trả về thông báo thành công
    } catch (error) {
      console.error(`Lỗi khi xoá nhân viên với ID ${id}:`, error); // Log lỗi nếu có
      throw new Error(`Không thể xoá nhân viên với ID ${id}. Vui lòng thử lại sau.`);
    }
  }
}
