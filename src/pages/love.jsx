/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function HeartAnimation() {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newHeart = {
                id: Date.now(),
                x: Math.random() * window.innerWidth,
                y: window.innerHeight,
                scale: Math.random() * 0.5 + 0.5, // Random scale between 0.5 and 1
            };
            setHearts((prev) => [...prev, newHeart].slice(-8)); // Limit to 8 hearts
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="heart text-red-400 text-2xl absolute pointer-events-none"
                    style={{ left: heart.x, top: heart.y }}
                    initial={{ opacity: 0, y: 0, scale: heart.scale }}
                    animate={{ opacity: [0, 1, 0], y: -window.innerHeight - 100, scale: heart.scale * 1.2 }}
                    transition={{ duration: 4, ease: [0.4, 0, 0.2, 1], times: [0, 0.3, 1] }}
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </motion.div>
            ))}
        </>
    );
}

function Letter() {
    const [isOpen, setIsOpen] = useState(false);

    const imageVariants = {
        closed: { rotate: [0, 5, -5, 0], scale: 1 },
        hover: { scale: 1.1, rotate: 0 },
    };

    return (
        <>
            <motion.div
                className="letter-container flex justify-center items-center"
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsOpen(true)}
            >
                <motion.div
                    className="relative w-80 h-48 sm:w-96 sm:h-56 lg:w-[28rem] lg:h-64 bg-gradient-to-br from-white to-pink-50 rounded-xl shadow-2xl flex items-center justify-center"
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }}
                >
                    <motion.img
                        src="https://img.icons8.com/color/96/000000/love-letter.png"
                        alt="Love Letter"
                        className="w-28 h-28 sm:w-32 sm:h-32"
                        variants={imageVariants}
                        animate="closed"
                        whileHover="hover"
                        transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
                    />
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-rose-200/50 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.9] }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className="bg-gradient-to-tr from-white via-rose-50 to-rose-200 rounded-3xl shadow-2xl p-10 max-w-xl w-full relative border-2 border-rose-300"
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.9] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                        <button
                            className="absolute top-4 right-4 text-rose-600 hover:text-rose-400"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <motion.div
                            className="text-rose-800 text-lg sm:text-xl font-serif leading-relaxed text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Rinjani, kamu adalah cahaya dalam hidupku. Seperti <span className="italic">Lakshmi</span>, Dewi keberuntungan,
                            kamu membawa kebahagiaan dan keseimbangan dalam hidupku. Aku bersyukur setiap hari memiliki kamu di sampingku.
                            <br /><br />
                            Kamu membuat hidupku lebih berarti, seperti bulan purnama yang menerangi malam. Aku merasa beruntung memiliki
                            kamu sebagai pasangan hidupku.
                            <br /><br />
                            Aku suka cara kamu membuatku merasa dicintai dan dihargai. Kamu adalah cinta sejati yang aku cari.
                            <br /><br />
                            <span className="font-semibold italic">Om Shanti</span>, semoga kita selalu bersama dalam harmoni dan kebahagiaan.
                            <br /><br />
                            <div className='flex items-center justify-center'>
                                Aruni Umniyyatal Aliyyah
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                        </motion.div>
                    </motion.div>
                    </motion.div>
                )}
        </AnimatePresence >
        </>
    );
}

function Love() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <div
                className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-peach-100/50 pointer-events-none"
                style={{
                    backgroundImage: `url('https://png.pngtree.com/png-clipart/20230914/original/pngtree-cute-cartoon-teddy-bear-sticker-vector-illustration-png-image_11084967.png')`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '200px 200px',
                    opacity: 0.3
                }}
            />
            <HeartAnimation />
            <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl text-pink-900 font-playfair font-bold mb-10 text-center z-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.9] }}
            >
                Dear Rinjani
            </motion.h1>
            <Letter />
            <motion.div
                className="mt-10 text-pink-800 text-lg sm:text-xl font-roboto text-center px-6 max-w-lg z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }}
            >
                <button
                    onClick={() => navigate('/rinjani')}
                    className="bg-pink-100 text-pink-700 hover:bg-pink-200 hover:text-pink-900 px-6 py-2 rounded-full font-semibold shadow-md transition duration-300 ease-in-out"
                >
                    View More
                </button>
            </motion.div>
        </div>
    );
}

export default Love;