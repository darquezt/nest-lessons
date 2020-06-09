import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType('Student')
export class StudentType {
  @Field(() => ID, { name: 'id' })
  _id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
