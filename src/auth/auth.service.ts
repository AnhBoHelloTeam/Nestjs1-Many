// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { UserService } from '../user/user.service';  // Giả sử bạn có một service người dùng
// import { LoginDto } from './dto/login.dto';  // DTO cho login
// import { User } from '../user/user.entity';  // Entity của User
// import * as bcrypt from 'bcryptjs';

// @Injectable()
// export class AuthService {
//   constructor(
//     private userService: UserService,
//     private jwtService: JwtService,
//   ) {}

//   // Đăng ký người dùng
//   async register(userData: any): Promise<User> {
//     const user = await this.userService.create(userData);
//     return user;
//   }

//   // Đăng nhập người dùng
//   async login(loginDto: LoginDto): Promise<any> {
//     const user = await this.userService.findByEmail(loginDto.email);

//     if (user && bcrypt.compareSync(loginDto.password, user.password)) {
//       const payload = { email: user.email, sub: user.id };
//       return {
//         access_token: this.jwtService.sign(payload),
//       };
//     }

//     throw new Error('Invalid credentials');
//   }
// }
