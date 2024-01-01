import { Button } from '@/components/ui/button';
import { BsYoutube } from 'react-icons/bs';

type IconProps = {
  url: string;
};

const YouTubeIcon = (props: IconProps) => {
  return (
    <div>
      <Button variant="link">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <BsYoutube className="w-8 h-8" />
        </a>
      </Button>
    </div>
  );
};

export default YouTubeIcon;
