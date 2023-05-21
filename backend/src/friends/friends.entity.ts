import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base-entity";

@Entity('friends')
export class Friends extends BaseEntity{
	@Column({type: 'integer', nullable: false})
	friend_id:number;
}
