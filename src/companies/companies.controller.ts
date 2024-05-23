import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompaniesService } from './companies.service';
import { User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';


@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) { }

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto, @User() user: IUser) {
    console.log(">>> check info", user);
    return this.companiesService.create(createCompanyDto);
  }
}
