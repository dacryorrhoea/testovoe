import { Deed } from "src/deeds/entities/deed.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Friendship } from "./friendship.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar', select: false })
  password: string;

  @OneToMany(() => Deed, deed => deed.owner)
  deeds: Deed[];

  @OneToMany(() => Friendship, friend => friend.owner)
  friends: Friendship[];
}
