import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {

    @IsNotEmpty({ message: 'Name không được để trống aaa' })
    name: string;

    @IsNotEmpty({ message: 'Address không được để trống' })
    address: string;

    @IsNotEmpty({ message: 'Description không được để trống' })
    description: string;

}
