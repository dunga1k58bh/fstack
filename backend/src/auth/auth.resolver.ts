import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginDto } from './dto/login.dto';
import { AuthResponse } from './dto/auth.response.dto';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/public.decorator';

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}
}
