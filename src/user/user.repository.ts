import { DataSource, EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository extends Repository<User>{
    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

}