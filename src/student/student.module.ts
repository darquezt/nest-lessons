import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StudentService } from './student.service';
import { Student, StudentSchema } from './schemas/student.schema';
import { StudentResolver } from './student.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema },
    ]),
  ],
  providers: [
    StudentService,
    StudentResolver,
  ],
  exports: [
    StudentService,
  ],
})
export class StudentModule {}
