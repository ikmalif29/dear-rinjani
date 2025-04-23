/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Rinjani = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showPoem, setShowPoem] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const navigate = useNavigate();

    const poemText = [
        "Kamu adalah Rinjani, nada yang indah dalam simfoni hidupku. Wajahmu seperti bulan purnama, menerangi hari-hariku.",
        "Kamu memiliki keanggunan seperti Lakshmi, Dewi keberuntungan. Mata indahmu memancarkan cahaya yang mempesona.",
        "Kamu adalah cinta yang membawa kebahagiaan dan kedamaian dalam hidupku. Om Shanti, semoga kecantikanmu selalu bersinar dalam hidupku."
    ];

    const images = [
        { id: 1, src: "bub.jpg", alt: "Rinjani landscape", praise: "Kecantikanmu seperti pemandangan Rinjani, memukau dan menakjubkan" },
        { id: 2, src: "bub2.jpg", alt: "Rinjani mountains", praise: "Keteguhan hatimu bagai gunung Rinjani yang kokoh dan menawan" },
        { id: 3, src: "bub3.jpg", alt: "Rinjani lake", praise: "Matamu sejernih danau Rinjani yang memikat setiap pandangan" },
        { id: 4, src: "bub4.jpg", alt: "Rinjani sunrise", praise: "Senyummu bagaikan matahari terbit di Rinjani yang memberikan kehangatan" },
        { id: 5, src: "bub5.jpg", alt: "Rinjani valley", praise: "Kelembutanmu seperti lembah Rinjani yang menenangkan hati" },
        { id: 6, src: "bub6.jpg", alt: "Rinjani trekking", praise: "Langkahmu anggun bagai pendaki yang menjelajahi keindahan Rinjani" },
        { id: 7, src: "bub7.jpg", alt: "Rinjani crater", praise: "Cintamu sedalam kawah Rinjani yang tak terhingga" },
        { id: 8, src: "bub8.jpg", alt: "Rinjani stars", praise: "Tatapanmu seperti bintang di atas Rinjani, menuntunku dalam gelapnya malam" },
        { id: 9, src: "bub9.jpg", alt: "Rinjani breeze", praise: "Hadirnya kamu seperti angin Rinjani yang sejuk, menyentuh jiwa dengan lembut" }
    ];

    // Function to toggle music playing state
    const toggleMusic = () => {
        setIsPlaying(!isPlaying);
    };

    const backgroundVariants = {
        initial: {
            backgroundPosition: "0% 0%",
        },
        animate: {
            backgroundPosition: "100% 100%",
            transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            transition: {
                type: "spring",
                stiffness: 400
            }
        }
    };

    const popupVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.3
            }
        }
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            rotate: [0, -3, 3, -3, 0],
            transition: {
                duration: 0.5
            }
        },
        tap: {
            scale: 0.95
        }
    };

    // Music button animation variants
    const musicButtonVariants = {
        initial: { scale: 1, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" },
        hover: {
            scale: 1.05,
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
            rotate: [0, -5, 5, -5, 0],
            transition: {
                duration: 0.6
            }
        },
        tap: {
            scale: 0.95
        },
        playing: {
            scale: [1, 1.05, 1],
            boxShadow: ["0px 5px 15px rgba(0, 0, 0, 0.1)", "0px 8px 25px rgba(229, 83, 159, 0.4)", "0px 5px 15px rgba(0, 0, 0, 0.1)"],
            transition: {
                duration: 1.5,
                repeat: Infinity
            }
        }
    };

    // Note icon animation
    const noteVariants = {
        initial: { y: 0, opacity: 1 },
        animate: {
            y: [-5, -10, -5],
            opacity: [0.7, 1, 0.7],
            transition: {
                repeat: Infinity,
                duration: 2
            }
        }
    };

    return (
        <motion.div
            className="min-h-screen p-4 sm:p-8 flex flex-col items-center"
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            style={{
                background: "linear-gradient(135deg, #fff1f2 0%, #fecdd3 25%, #fb7185 50%, #e11d48 75%, #be123c 100%)",
                backgroundSize: "400% 400%"
            }}
        >
            <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl text-pink-900 font-bold mb-6 sm:mb-10 text-center z-10 relative"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.2
                }}
            >
                <span className="inline-block">
                    <motion.span
                        className="inline-block"
                        whileHover={{
                            rotate: [0, 5, -5, 5, 0],
                            color: ["#831843", "#be185d", "#db2777", "#be185d", "#831843"],
                            transition: { duration: 0.5 }
                        }}
                    >
                        R
                    </motion.span>
                    <motion.span
                        className="inline-block"
                        whileHover={{
                            rotate: [0, 5, -5, 5, 0],
                            color: ["#831843", "#be185d", "#db2777", "#be185d", "#831843"],
                            transition: { duration: 0.5 }
                        }}
                    >
                        i
                    </motion.span>
                    <motion.span
                        className="inline-block"
                        whileHover={{
                            rotate: [0, 5, -5, 5, 0],
                            color: ["#831843", "#be185d", "#db2777", "#be185d", "#831843"],
                            transition: { duration: 0.5 }
                        }}
                    >
                        n
                    </motion.span>
                    <motion.span
                        className="inline-block"
                        whileHover={{
                            rotate: [0, 5, -5, 5, 0],
                            color: ["#831843", "#be185d", "#db2777", "#be185d", "#831843"],
                            transition: { duration: 0.5 }
                        }}
                    >
                        j
                    </motion.span>
                    <motion.span
                        className="inline-block"
                        whileHover={{
                            rotate: [0, 5, -5, 5, 0],
                            color: ["#831843", "#be185d", "#db2777", "#be185d", "#831843"],
                            transition: { duration: 0.5 }
                        }}
                    >
                        a
                    </motion.span>
                    <motion.span
                        className="inline-block"
                        whileHover={{
                            rotate: [0, 5, -5, 5, 0],
                            color: ["#831843", "#be185d", "#db2777", "#be185d", "#831843"],
                            transition: { duration: 0.5 }
                        }}
                    >
                        n
                    </motion.span>
                    <motion.span
                        className="inline-block"
                        whileHover={{
                            rotate: [0, 5, -5, 5, 0],
                            color: ["#831843", "#be185d", "#db2777", "#be185d", "#831843"],
                            transition: { duration: 0.5 }
                        }}
                    >
                        i
                    </motion.span>
                </span>
            </motion.h1>

            <motion.div
                className="mb-8 flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <motion.button
                    className="bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 shadow-lg border-2 border-pink-200"
                    onClick={() => setShowPoem(true)}
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                >
                    <span className="text-xl">💝</span>
                    <span>Baca Puisi untuk Rinjani</span>
                    <span className="text-xl">💝</span>
                </motion.button>

                {/* New Music Button with animation */}
                <motion.button
                    className={`bg-gradient-to-r ${isPlaying ? 'from-purple-500 to-pink-600' : 'from-pink-500 to-purple-600'} text-white font-bold py-3 px-6 rounded-full flex items-center gap-3 shadow-xl border-2 border-pink-200 relative overflow-hidden`}
                    onClick={toggleMusic}
                    variants={musicButtonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    animate={isPlaying ? "playing" : "initial"}
                >
                    <div className="relative">
                        {isPlaying ? (
                            <>
                                <span className="text-2xl">🎵</span>
                                <motion.span 
                                    className="absolute -top-3 -right-2 text-lg"
                                    variants={noteVariants}
                                    initial="initial"
                                    animate="animate"
                                >
                                    🎵
                                </motion.span>
                                <motion.span 
                                    className="absolute -top-1 -left-2 text-sm"
                                    variants={noteVariants}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ delay: 0.5 }}
                                >
                                    🎶
                                </motion.span>
                            </>
                        ) : (
                            <span className="text-2xl">🎵</span>
                        )}
                    </div>
                    <span>{isPlaying ? 'Berhenti Musik' : 'Putar Musik'}</span>
                    
                    {/* Animated background effect when playing */}
                    {isPlaying && (
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 -z-10 opacity-30"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    )}
                </motion.button>
            </motion.div>

            <motion.p
                className="text-pink-900 text-lg sm:text-xl text-center max-w-2xl mb-8 sm:mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                Klik gambar manapun untuk melihat lebih dekat keindahan Rinjani.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {images.map((image) => (
                    <motion.div
                        key={image.id}
                        className="relative overflow-hidden rounded-lg shadow-lg bg-white"
                        variants={itemVariants}
                        whileHover="hover"
                        onClick={() => setSelectedImage(image)}
                    >
                        <motion.img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 sm:h-72 object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-pink-900 via-transparent to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300 flex items-end justify-center pb-4"
                        >
                            <p className="text-white font-medium px-4 py-2 text-center">
                                {image.alt}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Image Popup */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="bg-white rounded-lg overflow-hidden max-w-4xl max-h-full"
                            variants={popupVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="w-full h-auto max-h-[80vh] object-contain"
                                />
                                <motion.button
                                    className="absolute top-4 right-4 bg-pink-900 text-white w-8 h-8 rounded-full flex items-center justify-center"
                                    onClick={() => setSelectedImage(null)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    ✕
                                </motion.button>
                            </div>
                            <div className="p-4 bg-pink-50">
                                <h3 className="text-xl font-bold text-pink-900">{selectedImage.alt}</h3>
                                <p className="text-pink-800 mt-2 italic">
                                    "{selectedImage.praise}"
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Poem Popup */}
            <AnimatePresence>
                {showPoem && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowPoem(false)}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg overflow-hidden max-w-2xl w-full shadow-2xl"
                            variants={popupVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative p-8">
                                <motion.div
                                    className="absolute -top-6 -left-6 w-16 h-16 text-4xl"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    ✨
                                </motion.div>
                                <motion.div
                                    className="absolute -bottom-6 -right-6 w-16 h-16 text-4xl"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    ✨
                                </motion.div>

                                <h2 className="text-2xl font-bold text-pink-900 mb-6 text-center">Puisi untuk Rinjani</h2>

                                <div className="space-y-4">
                                    {poemText.map((line, index) => (
                                        <motion.p
                                            key={index}
                                            className="text-pink-800 italic text-center"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * index + 0.2 }}
                                        >
                                            "{line}"
                                        </motion.p>
                                    ))}
                                </div>

                                <div className="flex justify-center mt-8">
                                    <motion.button
                                        className="bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-2 border-2 border-pink-300 shadow-md"
                                        onClick={() => setShowPoem(false)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span>❤️</span>
                                        <span>Tutup</span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="mt-12 text-center text-pink-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <button
                    onClick={() => navigate('/')}
                    className="mt-4 bg-pink-100 text-pink-700 hover:bg-pink-200 hover:text-pink-900 px-6 py-2 rounded-full font-semibold shadow-md transition duration-300 ease-in-out"
                >
                    back
                </button>
                <p className="font-medium">© 2025 Rinjani - Cinta Abadi</p>
            </motion.div>
        </motion.div>
    );
};

export default Rinjani;