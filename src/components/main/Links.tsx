import YouTubeIcon from '@/components/icons/YouTubeIcon';
import DiscordIcon from '@/components/icons/DiscordIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';

const Links = () => {
  return (
    <div className="flex items-center space-x-2 mt-2">
      <YouTubeIcon url="https://youtube.com/@m1dev" />
      <DiscordIcon username="m1.tsx" />
      <GitHubIcon url="https://github.com/m1-dev" />
    </div>
  );
};

export default Links;
