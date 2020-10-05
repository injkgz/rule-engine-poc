import { Injectable, NotFoundException } from '@nestjs/common';
import { Rules } from './entity/rules.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { createRuleDTO } from './input/create-rule.input';
import { RulesType } from './type/rules.model';
@Injectable()
export class RulesService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    @InjectModel(Rules.name)
    private readonly rulesModel: Model<Rules>,
  ) {}
  async getRules(type: string): Promise<string> {
    if (type === 'group') {
      const rule = await this.rulesModel.find();
      console.log(rule[0].rule);
      return rule[0].rule;
    }
    if (type === 'user') {
      return null;
    } else {
      throw new NotFoundException(type);
    }
  }
  async createRule(rule: createRuleDTO): Promise<RulesType> {
    console.log(rule);
    return this.rulesModel.create(rule);
  }
}
