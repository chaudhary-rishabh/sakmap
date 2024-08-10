import { useState } from 'react';

function ControlledCarousel() {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{ height: "100vh", width: "100vw" }} className='h-full w-full bg-gradient-to-r from-blue-500 via-transparent to-white'>

        </div>
    );
}

export default ControlledCarousel;
