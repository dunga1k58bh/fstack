import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
	imports: [
		UsersModule,
		PassportModule,
		JwtModule.register({
			global: true,
			secret: jwtConstants.secret,
			signOptions: { expiresIn: '1d' }
		})
	],
	controllers: [AuthController],
	providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
