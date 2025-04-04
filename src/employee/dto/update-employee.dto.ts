// src/employee/dto/update-employee.dto.ts
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsEmail } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsNumber()
  @IsOptional()
  salary?: number;

  @IsString()
  @IsOptional()
  position?: string;

  @IsNumber()
  @IsOptional()
  departmentId?: number;  // Cập nhật phòng ban nếu cần
}
