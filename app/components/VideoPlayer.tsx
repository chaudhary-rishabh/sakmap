import React from 'react';

const VideoPlayer = ({ videoId, thumbnailUrl }: any) => {
    return (
        <>
            <div className='flex justify-center items-center p-16'>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    style={{
                        // position: 'absolute',
                        width: '250px',
                        height: "280px",
                        borderRadius: "10%"
                    }}
                    title="sakmap overview of course"
                ></iframe>
            </div>
        </>
    );
};

export default VideoPlayer;
