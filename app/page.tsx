import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import {
    CardTitle,
    CardDescription,
    CardContent,
    Card
} from '@/components/ui/card';

import YouTubeIcon from '@/components/icons/YouTubeIcon';
import DiscordIcon from '@/components/icons/DiscordIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';

export const runtime = 'edge';

const App = () => (
    <div
        key="1"
        className="
            bg-white
            text-black
            dark:bg-black
            dark:text-white
            min-h-screen
            px-6
            py-8
            flex
            items-center
            justify-center
        "
    >
        <Card
            className="
                flex
                flex-col
                md:flex-row
                items-start
                space-x-0
                md:space-x-6
                max-w-2xl
                mx-auto
                border-0
                bg-transparent
            "
        >
            <Avatar
                className="
                    h-36
                    w-36
                    border
                    border-neutral-900
                    mb-4
                    md:mb-0
                "
            >
                <AvatarImage
                    alt="M1 Profile Picture"
                    src="https://github.com/m1-dev.png"
                />
                <AvatarFallback>M1</AvatarFallback>
            </Avatar>
            <CardContent>
                <CardTitle className="text-3xl font-bold">M1</CardTitle>
                <CardDescription
                    className="
                        text-gray-500
                        dark:text-gray-400
                        mt-2
                        text-lg
                    "
                >
                    self-taught developer.
                </CardDescription>
                <div className="flex items-center space-x-2 mt-2">
                    <YouTubeIcon url="https://youtube.com/@m1dev" />
                    <DiscordIcon username="m1.dev" />
                    <GitHubIcon url="https://github.com/m1-dev" />
                </div>
            </CardContent>
        </Card>
    </div>
);

export default App;
