import {
    CardTitle,
    CardDescription,
    CardContent,
    Card
} from '@/components/ui/card';

import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import Links from '@/components/main/Links';

export const runtime = 'edge';

const App = () => {
    return (
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
                    <AvatarImage src="https://github.com/m1-dev.png" />
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
                        Self-taught developer.
                    </CardDescription>
                    <Links />
                </CardContent>
            </Card>
        </div>
    );
};

export default App;
