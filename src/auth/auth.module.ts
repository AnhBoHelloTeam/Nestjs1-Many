// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { JwtStrategy } from './jwt.strategy';
// import { UserModule } from '../user/user.module';  // Giả sử bạn có một module User để quản lý người dùng

// @Module({
//   imports: [
//     PassportModule,
//     JwtModule.register({
//       secret: 'your_secret_key',  // Thay bằng secret key của bạn
//       signOptions: { expiresIn: '60m' },
//     }),
//     UserModule,
//   ],
//   providers: [AuthService, JwtStrategy],
//   controllers: [AuthController],
// })
// export class AuthModule {}
