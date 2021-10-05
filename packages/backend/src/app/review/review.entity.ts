import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Review extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Field(() => String)
  @Column()
  text?: string;

  @Field(() => String)
  @Column()
  rating?: number;

}

export interface ReviewPayload {
  id: string;
  text?: string;
  rating?: number;
}