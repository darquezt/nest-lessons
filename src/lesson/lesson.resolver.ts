import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput, AssignStudentsInput } from './lesson.input';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
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
}
