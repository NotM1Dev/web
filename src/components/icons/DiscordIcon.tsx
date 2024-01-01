import { Button } from '@/components/ui/button';
import { BsDiscord } from 'react-icons/bs';
import { toast } from 'sonner';

type IconProps = {
  username: string;
};

const DiscordIcon = (props: IconProps) => {
  const onClick = () => {
    navigator.clipboard.writeText(props.username);
    toast('Copied Discord username to clipboard.', { description: props.username });
  };

  return (
    <div>
      <Button onClick={onClick} variant="link">
        <BsDiscord className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default DiscordIcon;
