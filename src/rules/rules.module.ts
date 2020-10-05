import { Module } from '@nestjs/common';
import { RulesService } from './rules.service';
import { RulesResolver } from './rules.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Rules, RulesSchema } from './entity/rules.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rules.name, schema: RulesSchema }]),
  ],
  providers: [RulesService, RulesResolver]
})
export class RulesModule {}
