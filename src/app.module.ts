import { Module } from '@nestjs/common';
import { RulesModule } from './rules/rules.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    RulesModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }), 
  ],
})
export class AppModule {}
