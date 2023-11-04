import { BaseEntity } from "src/base/entity/base.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique:true})
    title: string

    @Column({ nullable: true })
    description: string

    @Column({ default: () => TodoStatus.OPEN })
    status: TodoStatus

    @ManyToOne(() => User, (user) => user.todos)
    user: User
}

export enum TodoStatus {
    OPEN,
    IN_PROGRESS,
    DONE
}
