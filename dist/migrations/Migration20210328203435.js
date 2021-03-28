"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210328203435 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210328203435 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table `user` (`_id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `username` VARCHAR(50) not null, `password` text not null) default character set utf8mb4 engine = InnoDB;');
            this.addSql('alter table `user` add unique `user_username_unique`(`username`);');
        });
    }
}
exports.Migration20210328203435 = Migration20210328203435;
//# sourceMappingURL=Migration20210328203435.js.map