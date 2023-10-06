const Backdrop = ({
  visible,
  transitionDuration = "400",
  onClick,
}: {
  visible: boolean;
  transitionDuration?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      style={{
        transitionDuration: `${transitionDuration}ms`,
        transitionProperty: "opacity, visibility",
      }}
      onClick={() => onClick?.()}
      className={`backdrop ${visible ? "visible" : ""}`}
    />
  );
};

export default Backdrop;
