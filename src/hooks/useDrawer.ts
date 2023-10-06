import useBoolean from "./useBoolean";

export default function useDrawer() {
  const { isTrue, setToFalse, setToTrue } = useBoolean();

  return {
    open: isTrue,
    onClose: setToFalse,
    onOpen: setToTrue,
  };
}
