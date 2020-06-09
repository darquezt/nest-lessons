import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Lesson } from './schemas/lesson.schema';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson.name)
    private lessonModel: Model<Lesson>,
  ) {}

  async getAllLessons() {
    const lessons = await this.lessonModel.find();

    return lessons;
  }

  async getLesson(id: string) {
    const lesson = this.lessonModel.findOne({ _id: id });

    return lesson;
  }

  async createLesson (params: CreateLessonInput) {
    const { name, startDate, endDate } = params;

    const lesson = await this.lessonModel.create({
      name,
      startDate,
      endDate,
    });

    return lesson;
  }
}
