import {
	Body,
	Controller,
	Get,
	Post,
	Request,
	UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/public.decorator';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller()
export class AuthController {
	constructor(private authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('auth/login')
	login(@Request() req) {
		return this.authService.login(req.user);
	}

	@UseGuards(JwtAuthGuard)
	@Get('profile')
	getProfile(@Request() req) {
		return req.user;
	}
}
