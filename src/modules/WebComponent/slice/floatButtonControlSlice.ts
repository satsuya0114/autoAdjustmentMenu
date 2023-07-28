import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { getFloatButtonDefaultLeft, getFloatButtonDefaultTop } from '@/utils/positionUtils';

interface ControlState {
  floatButtonX: number;
  floatButtonY: number;
  isResizingDragging: boolean;
}

const initialState: ControlState = {
  floatButtonX: getFloatButtonDefaultLeft(),
  floatButtonY: getFloatButtonDefaultTop(),
  isResizingDragging: false,
};

const floatButtonControlSlice = createSlice({
  name: 'floatButtonControlState',
  initialState,
  reducers: {
    setFloatButtonPosition: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.floatButtonX = action.payload.x;
      state.floatButtonY = action.payload.y;
    },
    startResizeDrag: (state) => {
      state.isResizingDragging = true;
    },
    finishResizeDrag: (state) => {
      state.isResizingDragging = false;
    },
    resetFloatButtonPosition: (state) => {
      state.floatButtonX = getFloatButtonDefaultLeft();
      state.floatButtonY = getFloatButtonDefaultTop();
    },
  },
});

export const {
  setFloatButtonPosition,
  startResizeDrag,
  finishResizeDrag,
  resetFloatButtonPosition,
} = floatButtonControlSlice.actions;

export default floatButtonControlSlice.reducer;
