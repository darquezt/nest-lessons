import { Resolver, Query } from "@nestjs/graphql";
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  lesson() {
    return {
      id: 'salkdfma',
      name: 'Example',
      startDate: (new Date()).toISOString,
      endDate: (new Date()).toISOString,
    }
  }
}
