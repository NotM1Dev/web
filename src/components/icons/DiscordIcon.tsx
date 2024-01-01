import { Button } from '@/components/ui/button';
import { BsDiscord } from 'react-icons/bs';

type IconProps = {
  url: string;
};

export default function DiscordIcon(props: IconProps) {
  return (
    <div>
      <Button asChild variant="link">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <BsDiscord className="w-8 h-8" />
        </a>
      </Button>
    </div>
  );
}
