import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schemas/student.schema';
import { Model } from 'mongoose';
import { CreateStudentInput } from './student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private studentModel: Model<Student>,
  ) {}

  async getAllStudents() {
    const students = await this.studentModel.find();

    return students;
  }

  async getStudent(id: string) {
    const student = await this.studentModel.findById(id);

    return student;
  }

  async createStudent({ firstName, lastName }: CreateStudentInput) {
    const student = await this.studentModel.create({ firstName, lastName });

    return student;
  }

  async getStudentsById(studentIds: string[]) {
    const students = await this.studentModel.find({
      _id: {
        $in: studentIds,
      },
    });

    return students;
  }
}
