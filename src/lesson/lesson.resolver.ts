import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput, AssignStudentsInput } from './lesson.input';
import { StudentType } from '../student/student.type';
import { Lesson } from './schemas/lesson.schema';
import { StudentService } from '../student/student.service';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Query(() => [ LessonType ])
  async getAllLessons() {
    return this.lessonService.getAllLessons();
  }

  @Query(() => LessonType)
  async getLesson(
    @Args('id') id: string,
  ) {
    return this.lessonService.getLesson(id);
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(() => LessonType)
  async assignStudents(
    @Args('assignStudentsInput') assignStudentInput: AssignStudentsInput,
  ) {
    return this.lessonService.assignStudents(assignStudentInput);
  }

  @ResolveField(() => [StudentType])
  async students(
    @Parent() lesson: Lesson,
  ) {
    return this.studentService.getStudentsById(lesson.students);
  }
}
