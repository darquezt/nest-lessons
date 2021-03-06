import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { LessonModule } from './lesson/lesson.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DATABASE, {
      useNewUrlParser: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LessonModule,
    StudentModule,
  ],
})
export class AppModule {}
