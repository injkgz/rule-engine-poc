import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Rules } from './entity/rules.entity';
import { RulesService } from './rules.service';
import { RulesType } from './type/rules.model';
import { createRuleDTO } from './input/create-rule.input';
@Resolver(Rules)
export class RulesResolver {
  constructor(private readonly rulesService: RulesService) {}
  @Query(() => String)
  rules(@Args('type') type: string): Promise<string> {
    return this.rulesService.getRules(type);
  }
  @Mutation(() => RulesType)
  createRule(@Args('rule') rule: createRuleDTO): Promise<Rules> {
    return this.rulesService.createRule(rule);
  }
}
