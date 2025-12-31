import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center gap-4 select-none cursor-pointer">
            {/* Text */}
            <div className="relative">
                <h1 className="text-2xl font-bold tracking-tight text-white">JX Platforms</h1>
                {/* Red diamond above 't'/'f' area approx */}
                <div className="absolute -top-1 left-[55%] w-2.5 h-2.5 bg-red-600 rotate-45 transform -translate-x-1/2" />
            </div>

            {/* Colored Squares cluster */}
            <div className="relative w-8 h-12 flex flex-col justify-center">
                {/* These squares need to be absolutely positioned to match the cluster */}
                {/* Orange top right */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-orange-500" />
                {/* Green below orange, slightly left */}
                <div className="absolute top-2 right-1 w-3 h-3 bg-lime-500 z-10" />
                {/* Red below green, more left */}
                <div className="absolute top-5 right-2 w-3 h-3 bg-red-600 z-20" />
                {/* Blue below red, right */}
                <div className="absolute top-7 right-0 w-3 h-3 bg-blue-500" />
                {/* Yellow bottom */}
                <div className="absolute top-9 right-1 w-3 h-3 bg-yellow-400" />
            </div>
        </div>
    );
};

export default Logo;
