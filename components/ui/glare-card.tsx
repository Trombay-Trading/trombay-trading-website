"use client";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export const GlareCard = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const isPointerInside = useRef(false);
    const refElement = useRef<HTMLDivElement>(null);
    const state = useRef({
        glare: {
            x: 50,
            y: 50,
        },
        background: {
            x: 50,
            y: 50,
        },
        rotate: {
            x: 0,
            y: 0,
        },
    });
    const containerStyle = {
        "--m-x": "50%",
        "--m-y": "50%",
        "--r-x": "0deg",
        "--r-y": "0deg",
        "--bg-x": "50%",
        "--bg-y": "50%",
        "--duration": "300ms",
        "--foil-size": "100%",
        "--opacity": "0",
        "--radius": "0px",
        "--easing": "ease",
        "--transition": "var(--duration) var(--easing)",
    } as any;

    const updateStyles = () => {
        if (refElement.current) {
            const { background, rotate, glare } = state.current;
            refElement.current?.style.setProperty("--m-x", `${glare.x}%`);
            refElement.current?.style.setProperty("--m-y", `${glare.y}%`);
            refElement.current?.style.setProperty("--r-x", `${rotate.x}deg`);
            refElement.current?.style.setProperty("--r-y", `${rotate.y}deg`);
            refElement.current?.style.setProperty("--bg-x", `${background.x}%`);
            refElement.current?.style.setProperty("--bg-y", `${background.y}%`);
        }
    };
    return (
        <div
            style={containerStyle}
            className="relative isolate [aspect-ratio:3/2] w-full transition-transform delay-[var(--delay)] duration-[var(--duration)] ease-[var(--easing)] will-change-transform [contain:layout_style] [perspective:600px]"
            ref={refElement}
            onPointerMove={(event) => {
                const rotateFactor = 0.4;
                const rect = event.currentTarget.getBoundingClientRect();
                const position = {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                };
                const percentage = {
                    x: (100 / rect.width) * position.x,
                    y: (100 / rect.height) * position.y,
                };
                const delta = {
                    x: percentage.x - 50,
                    y: percentage.y - 50,
                };

                const { background, rotate, glare } = state.current;
                background.x = 50 + percentage.x / 4 - 12.5;
                background.y = 50 + percentage.y / 3 - 16.67;
                rotate.x = -(delta.x / 3.5);
                rotate.y = delta.y / 2;
                rotate.x *= rotateFactor;
                rotate.y *= rotateFactor;
                glare.x = percentage.x;
                glare.y = percentage.y;

                updateStyles();
            }}
            onPointerEnter={() => {
                isPointerInside.current = true;
                if (refElement.current) {
                    setTimeout(() => {
                        if (isPointerInside.current) {
                            refElement.current?.style.setProperty("--duration", "0s");
                        }
                    }, 300);
                }
            }}
            onPointerLeave={() => {
                isPointerInside.current = false;
                if (refElement.current) {
                    refElement.current.style.removeProperty("--duration");
                    refElement.current?.style.setProperty("--r-x", `0deg`);
                    refElement.current?.style.setProperty("--r-y", `0deg`);
                }
            }}
        >
            <div className="grid h-full origin-center [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] overflow-hidden rounded-2xl border border-brand-200 shadow-md transition-transform delay-[var(--delay)] duration-[var(--duration)] ease-[var(--easing)] will-change-transform">
                <div className="grid h-full w-full [grid-area:1/1]">
                    <div className={cn("h-full w-full bg-[#FFFFFF]", className)}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
