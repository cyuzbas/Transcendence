import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base-entity";

@Entity('user')
export class User extends BaseEntity{
	
	@Column({type: 'varchar', nullable: false})
	password:string;

	@Column({type: 'varchar', nullable: false})
	user_name:	string;

	@Column({type: 'bool', nullable: false})
	is_online:	boolean;
}