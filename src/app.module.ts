import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DishModule } from './dish/dish.module';
import { SaleModule } from './sale/sale.module';
import { SaleDetailModule } from './sale-detail/sale-detail.module';
import { UpdateImageModule } from './upload-image/upload-image.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const dbPort = Number(configService.get('DB_PORT'));
        // Crear una instancia de DataSource para la conexión temporal
        const tempDataSource = new DataSource({
          type: 'mssql',
          host: configService.get('DB_HOST'),
          port: dbPort,
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_MASTER'),
          options: {
            encrypt: false,
            trustServerCertificate: true,
          },
        });
        // Inicializar la conexión temporal
        await tempDataSource.initialize();

        const dbName = configService.get('DB_NAME');

        // Crear la base de datos si no existe
        await tempDataSource.query(`
          IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = '${dbName}')
          CREATE DATABASE ${dbName};
        `);

        // Cerrar la conexión temporal
        await tempDataSource.destroy();

        return {
          type: 'mssql',
          host: configService.get('DB_HOST'),
          port: dbPort,
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: dbName,
          synchronize: true,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          options: {
            encrypt: false,
            trustServerCertificate: true,
          },
        };
      },
    }),
    UserModule,
    DishModule,
    SaleModule,
    SaleDetailModule,
    UpdateImageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}