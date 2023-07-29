/* eslint-disable import/no-cycle */
import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit';

import counterReducer from '~/src/modules/HomePageSimulator/slice/homePageSimulator';

const rootReducer = combineReducers({
  counter: counterReducer,
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
