import { BaseEntity } from "../base-entity";
export declare class Game extends BaseEntity {
    game_id: number;
    player1_id: number;
    player2_id: number;
    player1_score: number;
    player2_score: number;
}
