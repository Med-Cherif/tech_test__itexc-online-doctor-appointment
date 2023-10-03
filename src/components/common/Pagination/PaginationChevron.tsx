import { IconType } from "react-icons";

const PaginationChevron = ({
  Chevron,
  onClick,
  disabled,
}: {
  Chevron: IconType;
  disabled?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="pagination-chevron"
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          onClick();
        }
      }}
    >
      <Chevron />
    </button>
  );
};

export default PaginationChevron;
