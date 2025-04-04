import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Department } from '../department/department.entity';

@Entity()
@ObjectType()
export class Employee {
  @PrimaryGeneratedColumn()
  @Field(() => ID) // Thêm Field decorator để GraphQL nhận diện
  id: number;

  @Column()
  @Field() // Thêm Field decorator để GraphQL nhận diện
  name: string;

  @Column({ unique: true })
  @Field() // Thêm Field decorator để GraphQL nhận diện
  email: string;

  @Column()
  @Field() // Thêm Field decorator để GraphQL nhận diện
  salary: number;

  @Column()
  @Field() // Thêm Field decorator để GraphQL nhận diện
  position: string;

  @ManyToOne(() => Department, (department) => department.employees)
  @JoinColumn({ name: 'departmentId' })
  @Field(() => Department) // Thêm Field decorator với kiểu là Department
  department: Department;
}
