"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react';

export interface MediaItemType {
    id: number;
    type: string;
    title: string;
    desc: string;
    url: string;
    span: string;
}

const MediaItem = ({ item, className, onClick }: { item: MediaItemType, className?: string, onClick?: () => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isBuffering, setIsBuffering] = useState(true);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let mounted = true;

        const handleVideoPlay = async () => {
            if (!videoRef.current || !isInView || !mounted) return;

            try {
                if (videoRef.current.readyState >= 3) {
                    setIsBuffering(false);
                    await videoRef.current.play();
                } else {
                    setIsBuffering(true);
                    await new Promise((resolve) => {
                        if (videoRef.current) {
                            videoRef.current.oncanplay = resolve;
                        }
                    });
                    if (mounted) {
                        setIsBuffering(false);
                        await videoRef.current.play();
                    }
                }
            } catch (error) {
                console.warn("Video playback failed:", error);
            }
        };

        if (isInView) {
            handleVideoPlay();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }

        return () => {
            mounted = false;
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.removeAttribute('src');
                videoRef.current.load();
            }
        };
    }, [isInView]);

    if (item.type === 'video') {
        return (
            <div className={`${className} relative overflow-hidden`}>
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    onClick={onClick}
                    playsInline
                    muted
                    loop
                    preload="auto"
                    style={{
                        opacity: isBuffering ? 0.8 : 1,
                        transition: 'opacity 0.2s',
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                    }}
                >
                    <source src={item.url} type="video/mp4" />
                </video>
                {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                )}
            </div>
        );
    }

    return (
        <img
            src={item.url}
            alt={item.title}
            className={`${className} object-cover cursor-pointer`}
            onClick={onClick}
            loading="lazy"
            decoding="async"
        />
    );
};

interface GalleryModalProps {
    selectedItem: MediaItemType;
    isOpen: boolean;
    onClose: () => void;
    setSelectedItem: (item: MediaItemType | null) => void;
    mediaItems: MediaItemType[];
}

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
    const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });

    if (!isOpen) return null;

    return (
        <>
            {/* Main Modal */}
            <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                }}
                className="fixed inset-0 w-full min-h-screen sm:h-[90vh] md:h-[100vh] backdrop-blur-xl bg-azimute-black/80 dark:bg-azimute-black/95
                          overflow-hidden z-[100]"

            >
                {/* Main Content */}
                <div className="h-full flex flex-col justify-center items-center">
                    <div className="w-full flex-1 p-4 md:p-8 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedItem.id}
                                className="relative w-full max-w-[90%] md:max-w-5xl 
                                         h-auto max-h-[85vh] rounded-lg overflow-hidden shadow-2xl bg-azimute-black"
                                initial={{ y: 20, scale: 0.97, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                        mass: 0.5
                                    }
                                }}
                                exit={{
                                    y: 20,
                                    scale: 0.97,
                                    opacity: 0,
                                    transition: { duration: 0.15 }
                                }}
                            >
                                <MediaItem item={selectedItem} className="w-full h-[60vh] md:h-[75vh] object-contain" onClick={onClose} />
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 
                                              bg-gradient-to-t from-azimute-black/90 to-transparent">
                                    <h3 className="text-[#FAFAF7] text-xl md:text-2xl font-serif mb-2">
                                        {selectedItem.title}
                                    </h3>
                                    <p className="text-[#FAFAF7]/80 text-sm md:text-base max-w-3xl">
                                        {selectedItem.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Close Button */}
                <motion.button
                    className="absolute top-4 md:top-6 right-4 md:right-6 
                              p-3 rounded-full bg-white/10 text-white hover:bg-white/20 
                              backdrop-blur-sm z-50 transition-colors"
                    onClick={onClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <X className='w-5 h-5' />
                </motion.button>
            </motion.div>

            {/* Draggable Dock */}
            <motion.div
                drag
                dragMomentum={false}
                dragElastic={0.1}
                initial={false}
                animate={{ x: dockPosition.x, y: dockPosition.y }}
                onDragEnd={(_, info) => {
                    setDockPosition(prev => ({
                        x: prev.x + info.offset.x,
                        y: prev.y + info.offset.y
                    }));
                }}
                className="fixed z-[101] left-1/2 bottom-8 -translate-x-1/2 touch-none"
            >
                <motion.div
                    className="relative rounded-xl bg-azimute-blue-soft/10 backdrop-blur-xl 
                             border border-white/10 shadow-2xl p-1
                             cursor-grab active:cursor-grabbing"
                >
                    <div className="flex items-center -space-x-2 px-3 py-2">
                        {mediaItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedItem(item);
                                }}
                                style={{
                                    zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index,
                                }}
                                className={`
                                    relative group
                                    w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 
                                    rounded-lg overflow-hidden 
                                    cursor-pointer hover:z-20
                                    ${selectedItem.id === item.id
                                        ? 'ring-2 ring-azimute-gold shadow-lg'
                                        : 'hover:ring-2 hover:ring-white/30'}
                                `}
                                initial={{ rotate: index % 2 === 0 ? -10 : 10 }}
                                animate={{
                                    scale: selectedItem.id === item.id ? 1.2 : 1,
                                    rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -10 : 10,
                                    y: selectedItem.id === item.id ? -10 : 0,
                                }}
                                whileHover={{
                                    scale: 1.3,
                                    rotate: 0,
                                    y: -12,
                                    transition: { type: "spring", stiffness: 400, damping: 25 }
                                }}
                            >
                                <MediaItem item={item} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20" />
                                {selectedItem.id === item.id && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute -inset-2 bg-azimute-gold/20 blur-xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[]
    title: string
    description: string
}

export const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ mediaItems, title, description }) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
    const [items, setItems] = useState(mediaItems);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="w-full relative z-10">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px]"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                    }
                }}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        layoutId={`media-${item.id}`}
                        className={`relative overflow-hidden rounded-sm cursor-pointer group ${item.span}`}
                        onClick={() => setSelectedItem(item)}
                        variants={{
                            hidden: { y: 24, scale: 0.95, opacity: 0 },
                            visible: {
                                y: 0,
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 350,
                                    damping: 25,
                                    delay: index * 0.05
                                }
                            }
                        }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <MediaItem
                            item={item}
                            className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                            onClick={() => setSelectedItem(item)}
                        />
                        <motion.div
                            className="absolute inset-0 flex flex-col justify-end p-6 md:p-8"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-azimute-black/90 via-azimute-black/40 to-transparent" />
                            <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <span className="block text-azimute-gold text-[10px] font-bold uppercase tracking-[0.15em] mb-2">
                                    {item.title}
                                </span>
                                <p className="text-[#FAFAF7] text-[15px] font-medium leading-snug">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedItem && (
                    <GalleryModal
                        selectedItem={selectedItem}
                        isOpen={true}
                        onClose={() => setSelectedItem(null)}
                        setSelectedItem={setSelectedItem}
                        mediaItems={items}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};
