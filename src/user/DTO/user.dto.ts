import { IsString, IsNumber } from 'class-validator';

export class CreateUserDTO {
  @IsNumber()
  readonly userId: number;
  @IsString()
  readonly userName: string;
}
