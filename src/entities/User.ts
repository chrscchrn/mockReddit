import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
@Entity()
export class User {
    
  @Field(() => Int)
  @PrimaryKey()
  _id!: number;

  @Field(() => String)
  @Property({ type: 'date' })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()
  @Property({ columnType: 'VARCHAR(50)', unique: true })
  username!: string;

  @Property({ type: 'text'})
  password!: string;
}