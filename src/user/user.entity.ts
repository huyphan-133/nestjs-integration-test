import { BaseEntity } from "src/base/entity/base.entity";
import { Todo } from "src/todo/todo.entity";
import { Column, Entity, Index, OneToMany, Unique } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @Column({ unique: true })
    email: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @OneToMany(() => Todo, (todo) => todo.user)
    todos: Todo[]
}
