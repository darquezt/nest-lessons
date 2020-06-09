import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectID } from 'mongodb';
import { Student } from '../../student/schemas/student.schema';


@Schema()
export class Lesson extends Document {
  @Prop()
  name: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop(raw({ type: [ObjectID], ref: Student.name }))
  students: string[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
