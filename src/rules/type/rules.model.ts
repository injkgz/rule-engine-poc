import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RulesType {
  @Field(type => ID)
  _id: string;
  @Field()
  rule: string;
}
