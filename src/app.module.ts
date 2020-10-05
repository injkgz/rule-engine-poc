import { Module } from '@nestjs/common';
import { RulesModule } from './rules/rules.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test'),
    RulesModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }), 
  ],
})
export class AppModule {}
