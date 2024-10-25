import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'mssql_db',
      port: 1433,
      username: 'sa',
      password: '732317',
      database: 'nestjs_docker_db',
      entities: [],
      synchronize: true,
      options: {
        encrypt: true,
        trustServerCertificate: true,
        enableArithAbort: true,
        cryptoCredentialsDetails: {
          minVersion: 'TLSv1'
        }
      },
      extra: {
        trustServerCertificate: true,
        encrypt: true
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
