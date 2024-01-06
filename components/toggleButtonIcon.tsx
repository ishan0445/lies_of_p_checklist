import { IconChevronDown, IconChevronLeft } from "@tabler/icons-react";

interface Props {
  isOpen: boolean;
}

// https://github.com/tabler/tabler-icons
// https://tabler-icons.io/
const ToggleButtonIcon = (props: Props) => {
  const { isOpen } = props;

  let icon;

  if (isOpen) {
    icon = (
      <IconChevronLeft
        size={36} // set custom `width` and `height`
        stroke={4} // set `stroke-width`
        className="text-lies-of-p-persian-gold"
        role="img"
        aria-label="close list"
      />
    );
  } else {
    icon = (
      <IconChevronDown
        size={36} // set custom `width` and `height`
        stroke={4} // set `stroke-width`
        className="text-lies-of-p-persian-gold"
        role="img"
        aria-label="open list"
      />
    );
  }

  return icon;
};

export default ToggleButtonIcon;
