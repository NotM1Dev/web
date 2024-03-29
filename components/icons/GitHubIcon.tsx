'use client';

import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';

export interface GitHubIconProps {
    url: string;
}

const GitHubIcon = (props: GitHubIconProps) => {
    return (
        <div>
            <label htmlFor="github-url" className="sr-only">
                GitHub Profile URL
            </label>
            <Button id="github-url" variant="link">
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <BsGithub className="w-8 h-8" />
                </a>
            </Button>
        </div>
    );
};

export default GitHubIcon;
