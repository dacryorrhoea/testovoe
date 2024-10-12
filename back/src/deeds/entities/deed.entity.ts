import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable } from "typeorm";
import { User } from "src/user/entities/user.entity";

@Entity()
export class Deed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  desc: string;

  @ManyToOne(() => User, user => user.deeds)
  @JoinColumn()
  owner: User;
}
