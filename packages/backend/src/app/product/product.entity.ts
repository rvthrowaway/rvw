import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Product extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Field(() => String)
  @Column()
  title?: string;

}

export interface ProductPayload {
  id: string;
  title?: string;
}