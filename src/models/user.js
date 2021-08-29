import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeMongoose } from "graphql-compose-mongoose";
import { schemaComposer } from "../utils/schemaComposer";
export const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
  },
  {
    collection: "users",
  }
);

UserSchema.plugin(timestamps);

UserSchema.index({ createdAt: 1, updatedAt: 1 });

export const User = mongoose.model("users", UserSchema);

export const UserTC = composeMongoose(User, { schemaComposer });
