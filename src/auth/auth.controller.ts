// import { Controller, Post, Body } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { LoginDto } from './dto/login.dto';
// import { RegisterDto } from './dto/register.dto';  // DTO cho đăng ký
// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}
//   // Đăng ký người dùng
//   @Post('register')
//   async register(@Body() registerDto: RegisterDto) {
//     return this.authService.register(registerDto);
//   }
//   // Đăng nhập người dùng
//   @Post('login')
//   async login(@Body() loginDto: LoginDto) {
//     return this.authService.login(loginDto);
//   }
// }
