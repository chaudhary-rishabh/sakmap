import React from 'react';

const VideoPlayer = ({ videoId, thumbnailUrl }: any) => {
    return (
        <div className="lg:col-span-1 lg:row-span-2">
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <div style={{ paddingTop: '125%', position: 'relative', marginTop: "80px" }}>
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: "10%"
                        }}
                        title="YouTube Video Player"
                    ></iframe>
                </div>
                <div className="thumbnail" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '20%',
                    height: '10%',
                    backgroundImage: `url(${thumbnailUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: "10%"
                }}></div>
            </div>
        </div>
    );
};

export default VideoPlayer;
