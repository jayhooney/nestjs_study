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

  async getUser(userId: number): Promise<User> {
    return await this.userRepo.findOne({
      where: {
        userId: userId,
      },
    });
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async createUser(userName: string): Promise<InsertResult> {
    return await this.userRepo.create({ userNm: userName });
  }

  async deleteUser(userId: number): Promise<DeleteResult> {
    return await this.userRepo.delete({ userId: userId });
  }

  async updateUser(user: User): Promise<User> {
    return await this.userRepo.save(user);
  }
}
