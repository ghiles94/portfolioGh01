import { createSlice } from "@reduxjs/toolkit";

export const temoignagesSlice = createSlice({
  name: "temoignages",
  initialState: {
    temoignages: [
      {
        id: 1,
        name: "Jean",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ",
      },
      {
        id: 2,
        name: "Pierre",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ",
      },
    ],
  },
  reducers: {
    addTemoignage: (state, action) => {
      state.temoignages.push(action.payload);
    },

    deleteTemoignage: (state, action) => {
      state.temoignages = state.temoignages.filter(
        (temoignage) => temoignage.id !== action.payload
      );
    },

    updateTemoignage: (state, action) => {
      const updatedTemoignages = state.temoignages.map((temoignage) => {
        if (temoignage.id == action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
            text: action.payload.text,
          };
        }
        return temoignage;
      });
      state.temoignages = updatedTemoignages;
    },
  },
});

export const { addTemoignage, deleteTemoignage, updateTemoignage } =
  temoignagesSlice.actions;
