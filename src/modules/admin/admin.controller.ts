import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  
  @Post()
  async login(@Body() loginDto: {login: string, password: string}) {
    return await this.adminService.login(loginDto);
  }
}
