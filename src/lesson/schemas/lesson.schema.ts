import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Lesson extends Document {
  @Prop()
  name: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
