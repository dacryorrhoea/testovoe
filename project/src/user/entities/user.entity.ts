import { Deed } from "src/deeds/entities/deed.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @OneToMany(() => Deed, deed => deed.owner, { eager:true })
  deeds: Deed[];
}
