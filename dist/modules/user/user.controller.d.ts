import { CreateTimeEntryDto } from './dto/timeCard.dto';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    s: any;
    constructor(userService: UserService);
    d: any;
    createUser(createUserDto: CreateUserDto): Promise<any>;
    getAllUsers(): Promise<any>;
    deleteUser(cpf: string, response: Response): Promise<void>;
    updateUserByCpf(cpfString: string, updateUserDto: UpdateUserDto): Promise<any>;
    createTimeEntryForUser(cpfString: string, timeEntryDto: CreateTimeEntryDto): Promise<any>;
    getTimeCardsByCpf(cpfString: string): Promise<any>;
}
