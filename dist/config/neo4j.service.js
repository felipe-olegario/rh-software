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
exports.Neo4jService = void 0;
const common_1 = require("@nestjs/common");
const neo4j_driver_1 = require("neo4j-driver");
let Neo4jService = class Neo4jService {
    constructor() {
        this.driver = neo4j_driver_1.default.driver('bolt://localhost:7687', neo4j_driver_1.default.auth.basic('neo4j', 'password'));
    }
    async onModuleInit() {
        this.session = this.driver.session();
    }
    async onModuleDestroy() {
        await this.session.close();
        await this.driver.close();
    }
    async create(query, data) {
        const result = await this.session.run(query, data);
        return result.records[0].get('u').properties;
    }
    async runQuery(query, params = {}) {
        const result = await this.session.run(query, params);
        return result;
    }
};
Neo4jService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], Neo4jService);
exports.Neo4jService = Neo4jService;
//# sourceMappingURL=neo4j.service.js.map