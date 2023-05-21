import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base-entity";

@Entity('user_data')
export class User_data extends BaseEntity{
	@Column({type: 'integer', nullable: false})
	password:number;
}