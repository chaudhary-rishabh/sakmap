import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

interface VimeoVideoProps {
    videoId: string;
    width?: number;
    height?: number;
}

const VimeoVideo: React.FC<VimeoVideoProps> = ({ videoId, width = 640, height = 360 }) => {
    const playerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (playerRef.current) {
            const player = new Player(playerRef.current, {
                id: parseInt(videoId, 10),
                width,
            });

            player.on('play', () => {
                console.log('Video is playing');
            });
        }
    }, [videoId, width]);

    return <div ref={playerRef} style={{ width, height }}></div>;
};

export default VimeoVideo;
