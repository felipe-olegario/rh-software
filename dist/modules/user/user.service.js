"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const neo4j_service_1 = require("../../config/neo4j.service");
let UserService = class UserService {
    constructor(neo4jService) {
        this.neo4jService = neo4jService;
    }
    async createUser(createUserDto) {
        return this.neo4jService.create('CREATE (u:User {name: $name, email: $email, cpf: $cpf}) RETURN u', createUserDto);
    }
    async deleteUserByCpf(cpf) {
        return this.neo4jService.runQuery('MATCH (u:User {cpf: $cpf}) DETACH DELETE u', { cpf });
    }
    async listUser() {
        return this.neo4jService.runQuery('MATCH (u:User) RETURN u', {});
    }
    async updateUserByCpf(params) {
        return this.neo4jService.runQuery('MATCH (u:User {cpf: $cpf}) SET u = $updateUserDto RETURN u', params);
    }
    async getTimeCardsByCpf(params) {
        const query = `
    MATCH (u:User {cpf: $cpf})-[:HAS_TIME_ENTRY]->(timeCard:TimeCard)
    RETURN COLLECT(timeCard) AS timeCards
  `;
        return this.neo4jService.runQuery(query, params);
    }
    async registerTimeCard(params) {
        const query = `
    MATCH (u:User {cpf: $cpf})
    CREATE (u)-[:HAS_TIME_ENTRY]->(timeCard:TimeCard {
      entryTime: $entryTime,
      exitTime: $exitTime
    })
    RETURN timeCard
  `;
        return this.neo4jService.runQuery(query, params);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [neo4j_service_1.Neo4jService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map