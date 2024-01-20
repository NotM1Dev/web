'use client';

import { Button } from '@/components/ui/button';
import { BsYoutube } from 'react-icons/bs';

export interface YouTubeIconProps {
    url: string;
}

const YouTubeIcon = (props: YouTubeIconProps) => {
    return (
        <div>
            <label htmlFor="youtube-button" className="sr-only">
                YouTube Channel
            </label>
            <Button id="youtube-button" variant="link">
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <BsYoutube className="w-8 h-8" />
                </a>
            </Button>
        </div>
    );
};

export default YouTubeIcon;
