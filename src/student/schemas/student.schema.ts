import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Student extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
