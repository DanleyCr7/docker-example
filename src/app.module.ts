import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreightRepository } from './freight.repository';
import { FreightModule } from './freight/freight.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host.docker.internal',
      username: 'busca_frete',
      password: '1234',
      database: 'busca_frete',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    FreightModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
