import { DataSource, Repository } from "typeorm";
import { Todo } from "./todo.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TodoRepository extends Repository<Todo>{
    constructor(private dataSource: DataSource) {
        super(Todo, dataSource.createEntityManager());
    }
}