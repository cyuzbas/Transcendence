import { PrimaryGeneratedColumn, Column } from "typeorm";


export class BaseEntity{
	@PrimaryGeneratedColumn()
	user_id:	number;

	@Column({type: 'varchar', nullable: false})
	nickname:	string;

	@Column({type: 'bool', nullable: false})
	is_online:	boolean;
}