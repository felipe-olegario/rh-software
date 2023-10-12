import { CreateUserDto } from './dto/user.dto';
import { Neo4jService } from '../../config/neo4j.service';
export declare class UserService {
    private readonly neo4jService;
    constructor(neo4jService: Neo4jService);
    createUser(createUserDto: CreateUserDto): Promise<any>;
    deleteUserByCpf(cpf: number): Promise<any>;
    listUser(): Promise<any>;
    updateUserByCpf(params: object): Promise<any>;
    getTimeCardsByCpf(params: object): Promise<any>;
    registerTimeCard(params: object): Promise<any>;
}
