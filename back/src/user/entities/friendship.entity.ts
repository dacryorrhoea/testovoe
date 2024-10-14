import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Friendship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  friend_username: string;

  @ManyToOne(() => User, user => user.friends)
  owner: User;
}
