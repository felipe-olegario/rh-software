import { CreateUserDto } from './dto/user.dto';
import { Neo4jService } from '../../config/neo4j.service';
export declare class UserService {
    private readonly neo4jService;
    constructor(neo4jService: Neo4jService);
    createUser(createUserDto: CreateUserDto): Promise<any>;
}
