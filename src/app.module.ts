import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationModule } from './organization/organization.module';
import { GraphqlModule } from './config/graphql/graphql.module';
import { DatabaseModule } from './config/database/database.module';
import { EnvConfigModule } from './config/env-config/env-config.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';


@Module({
  imports: [OrganizationModule, GraphqlModule, DatabaseModule, EnvConfigModule, UserModule, RoleModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
