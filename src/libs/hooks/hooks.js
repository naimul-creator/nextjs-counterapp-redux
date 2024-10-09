import { useDispatch as originalUseDispatch, useSelector as originalUseSelector, useStore as originalUseStore } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = originalUseDispatch.withTypes();
export const useSelector = originalUseSelector.withTypes();
export const useStore = originalUseStore.withTypes();
