// src/employee/dto/create-employee.dto.ts
import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsNumber()
  @IsNotEmpty()
  departmentId: number;  // Tham chiếu tới phòng ban
}
