import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
  }

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Abdul Hai',
            username: 'maverick',
            password: '123456789'
        },
        {
            id: 2,
            name: 'Abdul Mateen',
            username: 'maximus',
            password: '123456789'
        }
    ]
    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);
    }
}
