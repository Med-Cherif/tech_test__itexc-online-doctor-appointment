import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, TStoreData } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TStoreData> = useSelector;
