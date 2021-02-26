import { getModelForClass, prop } from '@typegoose/typegoose';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType({ description: 'User Model' })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  @prop({ required: true, unique: true, trim: true, lowercase: true  })
  username: string;

  @prop({ required: true })
  password: string;

}

export const UserModel = getModelForClass(User);



// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });
// // ------------------------------ User = ชื่อตาราง
// export const UserModel = mongoose.model("User", UserSchema);
