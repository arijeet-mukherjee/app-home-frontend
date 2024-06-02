import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface ShieldState {
  right: number;
  top : number;
  visible : boolean;
}

const initialState: ShieldState = {
  top: 105,
  right: 190,
  visible: true
};

export const shieldSlice = createSlice({
  name: "shield",
  initialState,
  reducers: {
    setShieldState: (state, action: PayloadAction<ShieldState>) => {
        state = action.payload;
    },
  },
});

export const { setShieldState } = shieldSlice.actions;
export const shieldReducer = shieldSlice.reducer;
