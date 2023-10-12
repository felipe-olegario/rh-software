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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const timeCard_dto_1 = require("./dto/timeCard.dto");
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./dto/user.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(createUserDto) {
        return this.userService.createUser(createUserDto);
    }
    async getAllUsers() {
        try {
            const result = await this.userService.listUser();
            return result.records.map((record) => record.get('u').properties);
        }
        catch (error) {
            throw new Error(`Falha ao listar os usuários: ${error.message}`);
        }
    }
    async deleteUser(cpf, response) {
        try {
            await this.userService.deleteUserByCpf(Number(cpf));
            response.status(common_1.HttpStatus.OK).send(`cpf "${cpf}" removido com sucesso.`);
        }
        catch (error) {
            throw new Error(`Falha ao excluir o usuário: ${error.message}`);
        }
    }
    async updateUserByCpf(cpfString, updateUserDto) {
        try {
            const cpf = Number(cpfString);
            const result = await this.userService.updateUserByCpf({ cpf, updateUserDto });
            return result.records[0].get('u').properties;
        }
        catch (error) {
            throw new Error(`Falha ao atualizar o usuário: ${error.message}`);
        }
    }
    async createTimeEntryForUser(cpfString, timeEntryDto) {
        try {
            const cpf = Number(cpfString);
            const params = {
                cpf,
                entryTime: timeEntryDto.entryTime,
                exitTime: timeEntryDto.exitTime,
            };
            const result = await this.userService.registerTimeCard(params);
            return result.records[0].get('timeCard').properties;
        }
        catch (error) {
            throw new Error(`Falha ao criar o registro de entrada e saída: ${error.message}`);
        }
    }
    async getTimeCardsByCpf(cpfString) {
        try {
            const cpf = Number(cpfString);
            const result = await this.userService.getTimeCardsByCpf({ cpf });
            if (result.records.length === 0) {
                throw new Error(`Nenhum timeCard encontrado para o usuário com CPF ${cpf}.`);
            }
            return result.records[0].get('timeCards').map((timeCard) => timeCard.properties);
        }
        catch (error) {
            throw new Error(`Falha ao recuperar os timeCards: ${error.message}`);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Delete)(':cpf'),
    __param(0, (0, common_1.Param)('cpf')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Put)(':cpfString'),
    __param(0, (0, common_1.Param)('cpfString')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserByCpf", null);
__decorate([
    (0, common_1.Post)(':cpfString/time-entry'),
    __param(0, (0, common_1.Param)('cpfString')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, timeCard_dto_1.CreateTimeEntryDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createTimeEntryForUser", null);
__decorate([
    (0, common_1.Get)(':cpfString/time-cards'),
    __param(0, (0, common_1.Param)('cpfString')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getTimeCardsByCpf", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map