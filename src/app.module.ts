import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { CartasModule } from './modules/cartas/cartas.module';
import { OrdenesModule } from './modules/ordenes/ordenes.module';
import { TipoCartasModule } from './modules/tipo-cartas/tipo-cartas.module';
import { HabilidadesModule } from './modules/habilidades/habilidades.module';
import { Configuration } from './shared/env.enum';
import { LoggerMiddleware } from './shared/logger-middleware/logger.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configVar } from './shared/configVar';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoUsuariosModule } from './modules/tipo-usuarios/tipo-usuarios.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `environment/${process.env.NODE_ENV.toLowerCase()}.env`,
      load: [configVar],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false,
    }),

    UsuariosModule,
    CartasModule,
    OrdenesModule,
    TipoCartasModule,
    HabilidadesModule,
    TipoUsuariosModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }

  constructor(private readonly configService: ConfigService) {
    const logger = new Logger(AppModule.name);
    AppModule.port = this.configService.get(Configuration.PORT);
    logger.verbose(`CONFIG_VAR: => ${JSON.stringify(configVar())}`);
    logger.log(
      `Configure on ENV: ${this.configService.get(Configuration.NODE_ENV)}`,
    );
    logger.log(
      `Configure NODE PORT on ${this.configService.get(Configuration.PORT)}`,
      AppModule.name,
    );
  }
}
