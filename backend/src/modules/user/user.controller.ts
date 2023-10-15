import { CreateTimeCardDto } from './dto/timeCard.dto';
import { Controller, Post, Body, Delete, Param, HttpStatus, Res, Get, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('users')
export class UserController {s
  constructor(private readonly userService: UserService) {}d

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.createUser(createUserDto);
    } catch (error) {
      throw new Error(`Falha ao criar o usuário: ${error.message}`);
    }
  }

  @Get()
  async getAllUsers() {
    try {
      const result = await this.userService.listUser();
      
      return result.records.map((record) => record.get('u').properties)
    } catch (error) {
      throw new Error(`Falha ao listar os usuários: ${error.message}`);
    }
  }

  @Delete(':cpf')
  async deleteUser(@Param('cpf') cpf: string, @Res() response: Response) {
    try {
      await this.userService.deleteUserByCpf(Number(cpf));
      response.status(HttpStatus.OK).send(`cpf "${cpf}" removido com sucesso.`)
    } catch (error) {
      throw new Error(`Falha ao excluir o usuário: ${error.message}`);
    }
  }

  @Put(':cpfString')
  async updateUserByCpf(@Param('cpfString') cpfString: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const cpf = Number(cpfString);
      const result = await this.userService.updateUserByCpf({ cpf, updateUserDto });
      return result.records[0].get('u').properties;
    } catch (error) {
      throw new Error(`Falha ao atualizar o usuário: ${error.message}`);
    }
  }

  @Post(':cpfString/time-card')
  async createTimeEntryForUser(
    @Param('cpfString') cpfString: string,
    @Body() timeEntryDto: CreateTimeCardDto,
  ) {
    try {
      const cpf = Number(cpfString); 
      const params = {
        cpf,
        entryTime: timeEntryDto.entryTime,
        exitTime: timeEntryDto.exitTime,
      };

      const result = await this.userService.registerTimeCard(params);
      return result.records[0].get('timeCard').properties;
    } catch (error) {
      throw new Error(`Falha ao criar o registro de entrada e saída: ${error.message}`);
    }
  }

  @Get(':cpfString/time-card')
  async getTimeCardsByCpf(@Param('cpfString') cpfString: string) {
    try {

      const cpf = Number(cpfString);
      const result = await this.userService.getTimeCardsByCpf({ cpf });

      if (result.records.length === 0) {
        throw new Error(`Nenhum timeCard encontrado para o usuário com CPF ${cpf}.`);
      }

      return result.records[0].get('timeCards').map((timeCard) => timeCard.properties);
    } catch (error) {
      throw new Error(`Falha ao recuperar os timeCards: ${error.message}`);
    }
  }
}
