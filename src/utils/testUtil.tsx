import { TextEncoder, TextDecoder } from 'util';

import { PropsWithChildren, ReactElement } from 'react';

import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions, renderHook, RenderHookOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import { AppStore, RootState, setupStore } from '@/redux/store';

Object.assign(global, { TextDecoder, TextEncoder });

class MockResizeObserver {
  // eslint-disable-next-line class-methods-use-this
  observe() {}

  // eslint-disable-next-line class-methods-use-this
  unobserve() {}

  // eslint-disable-next-line class-methods-use-this
  disconnect() {}
}

const setUpResizeObserver = () => {
  if (window) window.ResizeObserver = MockResizeObserver;
};

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}
interface ExtendedRenderHookOptions
  extends RenderHookOptions<{
    children: unknown;
  }> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const WrapperWithStore = (store) =>
  function Wrapper({ children }: PropsWithChildren<unknown>) {
    return <Provider store={store}>{children}</Provider>;
  };

const customRender = (
  ui: ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...options
  }: ExtendedRenderOptions = {},
) => ({
  ...render(ui, { wrapper: WrapperWithStore(store), ...options }),
  store,
});

const customRenderHook = <T,>(
  callback: (props: { children: unknown }) => T,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...options
  }: ExtendedRenderHookOptions = {},
) => ({
  ...renderHook(callback, { wrapper: WrapperWithStore(store), ...options }),
  store,
});

export * from '@testing-library/react';
export { customRender as render, setUpResizeObserver, customRenderHook as renderHook };
