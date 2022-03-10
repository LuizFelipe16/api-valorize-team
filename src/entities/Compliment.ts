import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { v4 as generatedUuid } from 'uuid';
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliment {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender: string;
  @JoinColumn({ name: "user_sender" })
  @ManyToOne(() => User)
  userSender: User;

  @Column()
  user_receiver: string;
  @JoinColumn({ name: "user_receiver" })
  @ManyToOne(() => User)
  userReceiver: User;

  @Column()
  tag_id: string;
  @JoinColumn({ name: "tag_id" }) // naquela tabela está referenciando um campo nesta tabela de name
  @ManyToOne(() => Tag) // muitos elogios podem ter uma tag - "MuitosPraUm"
  tag: Tag; // referencia a entidade Tag

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = generatedUuid();
    }
  }
}

export { Compliment }