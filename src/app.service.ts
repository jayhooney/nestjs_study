import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async aUser(userId: number): Promise<User> {
    return await this.userRepo.findOne({
      where: {
        userId: userId,
      },
    });
  }

  async allUser(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async addUser(userName: string): Promise<InsertResult> {
    return await this.userRepo.insert();
  }

  async deleteUser(): Promise<DeleteResult> {
    return await this.userRepo.delete();
  }

  async updateUser(userId: number): Promise<UpdateResult> {
    return await this.userRepo.update();
  }
}
