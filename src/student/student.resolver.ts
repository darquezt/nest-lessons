import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './student.input';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(
    private studentService: StudentService,
  ) {}

  @Query(() => [StudentType])
  async allStudents() {
    return this.studentService.getAllStudents();
  }

  @Query(() => StudentType)
  async student(
    @Args('id') id: string,
  ) {
    return this.studentService.getStudent(id);
  }

  @Mutation(() => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
