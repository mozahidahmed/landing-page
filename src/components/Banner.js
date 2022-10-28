import React from 'react';

const Banner = () => {
    return (
        <div className='banner-title background-banner'>
            <div className='banner-text'>
                <p style={{whiteSpace: 'nowrap'}} className='text-white fs-2 fs-sm-6 fw-bold lh-1'>Computer Engineering</p>
                <p className='text-white lh-1'>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

// backgroundImage: `url("https://i.ibb.co/f0XGSfB/Rectangle-2.png")`,
// position-absolute top-50 end-50  position-relative
export default Banner;