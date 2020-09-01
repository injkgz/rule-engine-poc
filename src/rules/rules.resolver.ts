import { Resolver, Query, Args } from '@nestjs/graphql';
import { RulesService } from './rules.service';

@Resolver(()=> String)
export class RulesResolver {
    constructor(private readonly rulesService: RulesService){

    }
    @Query(()=> String)
    rules(@Args('type') type: string): Promise<string>{
        return this.rulesService.getRules(type);
    }
}
