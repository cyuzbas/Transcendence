import { TypeOrmModuleOptions } from "@nestjs/typeorm"
// import { ConnectionOptions} from 'typeorm';
export const config: TypeOrmModuleOptions = {
	type:'postgres',
	username:'postgres',
	password: 'postgres',
	port: 5432,
	host:'db',
	database:'postgres',
	synchronize: true, //companies(id, name, city, location) //if we add location later it will automatically create tables into the database
	entities:["dist/**/*.entity{.ts,.js}"]

};
