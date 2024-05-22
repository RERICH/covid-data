import { Model, model, Schema, Document } from "mongoose";
import mongoose from "./mongoose"

interface IFavoutite extends Document {
  slug: string;
  selected: boolean;
  findOne: () => void;
}

const favouriteSchema = new Schema<IFavoutite>({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  selected: {
    type: Boolean,
    required: true,
  },
});


const FavouriteModel = () => {
  return mongoose.models && mongoose.models.Favourite
    ? mongoose.models.Favourite as Model<IFavoutite>
    : model<IFavoutite>("Favourite", favouriteSchema);
};

export default FavouriteModel;