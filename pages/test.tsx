import { GetServerSideProps } from 'next';
import { supabase } from '../supabase/supabaseClient'; // Update with your Supabase client path
import VimeoVideo from '../app/components/vimeo/VimeoPlayer';
import Image from 'next/image';

interface PageProps {
    videoId: string;
    thumbnailUrl: string;
}

const VideoPage: React.FC<PageProps> = ({ videoId, thumbnailUrl }) => {
    return (
        <div>
            <Image height={100} width={100} src={thumbnailUrl} alt="sakmap courses thumbnail" />
            <VimeoVideo videoId={videoId} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const { data, error } = await supabase
        .from('videos')
        .select('video_id, thumbnail_url')
        .single();

    if (error) {
        console.error(error);
        return { props: { videoId: '', thumbnailUrl: '' } };
    }

    return {
        props: {
            videoId: data.video_id,
            thumbnailUrl: data.thumbnail_url,
        },
    };
};

export default VideoPage;
