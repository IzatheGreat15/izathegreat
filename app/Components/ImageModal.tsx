"use client";

import { useState } from "react";
import { FaTimes, FaExpand } from "react-icons/fa";

interface ImageModalProps {
    src: string;
    alt?: string;
    className?: string;
}

export default function ImageModal({
    src,
    alt = "Project screenshot",
    className = "",
}: ImageModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Thumbnail */}
            <div
                onClick={() => setIsOpen(true)}
                className={`relative cursor-pointer group ${className}`}
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover rounded-lg"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center rounded-lg">
                    <FaExpand className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xl" />
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-5 right-5 text-white text-lg cursor-pointer hover:text-sky-400"
                        aria-label="Close image preview"
                    >
                        <FaTimes />
                    </button>

                    <img
                        src={src}
                        alt={alt}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}