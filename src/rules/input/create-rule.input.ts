import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

/**
 * createRuleDTO dto class
 */
@InputType()
export class createRuleDTO {
  /**
   * Rule
   *
   */
  @Field()
  @IsNotEmpty()
  rule: string;
}
