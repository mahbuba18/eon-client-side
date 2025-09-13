import React from 'react';

const Footer = () => {
    return (
        <footer className=" footer sm:footer-horizontal footer-center bg-sky-700 text-white">
            <aside>
                <p className='p-1'>Copyright © {new Date().getFullYear()}<strong> EON Systems</strong>. All right reserved </p>
            </aside>
        </footer>
    );
};

export default Footer;