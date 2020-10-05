import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Rules extends Document {
  @Prop()
  rule: string;
}
export const RulesSchema = SchemaFactory.createForClass(Rules);
