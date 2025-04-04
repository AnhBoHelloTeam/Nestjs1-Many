import { Resolver, Query, Args } from '@nestjs/graphql';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
import { ID } from '@nestjs/graphql';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => [Employee])
  async getEmployees(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Query(() => Employee)
  async getEmployeeById(@Args('id', { type: () => ID }) id: number): Promise<Employee> {
    return this.employeeService.findOneById(id);
  }
}
