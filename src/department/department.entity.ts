import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Employee } from '../employee/employee.entity';

// Đánh dấu lớp này là một entity trong cơ sở dữ liệu và một GraphQL type
@Entity()
@ObjectType()
export class Department {
  // Khóa chính của phòng ban, tự động tạo giá trị
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  // Tên phòng ban, đảm bảo duy nhất trong cơ sở dữ liệu
  @Column({ unique: true })
  @Field()
  name: string;

  // Địa điểm của phòng ban
  @Column()
  @Field()
  location: string;

  // Mối quan hệ một phòng ban có nhiều nhân viên
  @OneToMany(() => Employee, (employee) => employee.department)
  @Field(() => [Employee], { nullable: 'items' }) // Có thể có nhân viên hoặc không
  employees: Employee[];
}
