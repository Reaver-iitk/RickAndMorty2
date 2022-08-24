import { store } from '..';
import { useDispatch as useDispatchHook } from 'react-redux';

export type DispatchType = typeof store.dispatch;
export type StateType = ReturnType<typeof store.getState>;

export const useDispatch = () => useDispatchHook<DispatchType>();
