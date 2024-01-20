'use client';

import { Button } from '@/components/ui/button';
import { BsDiscord } from 'react-icons/bs';
import { toast } from 'sonner';

export interface DiscordIconProps {
    username: string;
    loading?: string;
    success?: string;
    error?: string;
}

const DiscordIcon = (props: DiscordIconProps) => {
    const {
        username,
        loading = 'Copying to clipboard...',
        success = 'Copied Discord username!',
        error = 'Failed to copy Discord username.'
    } = props;

    const onClick = () => {
        toast.promise(navigator.clipboard.writeText(username), {
            loading,
            success,
            error
        });
    };

    return (
        <div>
            <label htmlFor="discord-button" className="sr-only">
                Discord Username
            </label>
            <Button id="discord-button" onClick={onClick} variant="link">
                <BsDiscord className="w-8 h-8" />
            </Button>
        </div>
    );
};

export default DiscordIcon;
