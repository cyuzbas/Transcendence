"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'postgres',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    host: 'db',
    database: 'postgres',
    synchronize: true,
    entities: ["dist/**/*.entity{.ts,.js}"]
};
//# sourceMappingURL=orm.config.js.map