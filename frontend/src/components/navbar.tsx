import { cn } from '@repo/utils';
import { appIconSizeSmall, apps, perspective } from '../constants';
import { AppIcon } from './app-icon';
import { useAppSwitcher } from '../providers/app-switcher-context';
type NavbarProps = {
  parentRef?: React.RefObject<HTMLDivElement>;
};
const Navbar = ({ parentRef }: NavbarProps) => {
  const { isOpen, setIsOpen, offset } = useAppSwitcher();

  return (
    <div
      className={cn(
        'sticky bottom-0 mt-auto flex overflow-visible border-0 border-red-500 bg-green-300',
        isOpen ? 'pointer-events-none' : 'pointer-events-auto',
      )}
      style={{
        perspective,
        height: appIconSizeSmall,
        left: 0,
        bottom: 0,
        // parentRef?.current?.offsetWidth / 2 -
        // Math.min(800, parentRef?.current?.offsetWidth ?? 800) / 2,
        // offset,
        width: Math.min(800, parentRef?.current?.offsetWidth ?? 800),
      }}
      onPointerDown={(e) => {
        e.preventDefault();
        setIsOpen(true);
      }}
    >
      {/* <AppIcon index={-1} parentRef={parentRef} isSelectionBox /> */}
      {apps.map((_, index) => (
        <AppIcon key={index} index={index} parentRef={parentRef} />
      ))}
    </div>
  );
};

export { Navbar };
