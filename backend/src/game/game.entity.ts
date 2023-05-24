import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base-entity";

@Entity('game')
export class Game extends BaseEntity{
	@Column({type: 'integer', nullable: false})
	game_id:number;

	@Column({type: 'integer', nullable: false})
	player1_id:number;

	@Column({type: 'integer', nullable: false})
	player2_id:number;

	@Column({type: 'integer', nullable: false})
	player1_score:number;

	@Column({type: 'integer', nullable: false})
	player2_score:number;
}