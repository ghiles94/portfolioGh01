import { configureStore } from "@reduxjs/toolkit";
import { temoignagesSlice } from "./temoignagesSlice";

export default configureStore({
  reducer: {
    temoignages: temoignagesSlice.reducer,
  },
});

export const { addTemoignage, deleteTemoignage, updateTemoignage } =
  temoignagesSlice.actions;
