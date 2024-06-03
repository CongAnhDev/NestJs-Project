import { IsArray, IsBoolean, IsEmail, IsMongoId, IsNotEmpty, IsString } from "class-validator";


export class CreateSubscriberDto {

    @IsNotEmpty({ message: 'name không được để trống', })
    name: string;

    @IsEmail({}, { message: 'email đúng định dạng', })
    @IsNotEmpty({ message: 'email không được để trống', })
    email: string;

    @IsNotEmpty({ message: 'skill không được để trống', })
    @IsString({ each: true, message: 'skill định dạng là string', })
    @IsArray({ message: 'skill có định dạng là array', })
    skills: string[];

}