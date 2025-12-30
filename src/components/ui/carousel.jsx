import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "./button"

const CarouselContext = React.createContext(null)

const useCarousel = () => {
    const context = React.useContext(CarouselContext)
    if (!context) {
        throw new Error("useCarousel must be used within <Carousel>")
    }
    return context
}

export const Carousel = React.forwardRef(
    (
        {
            orientation = "horizontal",
            opts,
            setApi,
            plugins = [],
            className,
            children,
        },
        ref
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                axis: orientation === "horizontal" ? "x" : "y",
                ...opts,
            },
            plugins
        )

        const [canScrollPrev, setCanScrollPrev] = React.useState(false)
        const [canScrollNext, setCanScrollNext] = React.useState(false)

        const onSelect = React.useCallback((api) => {
            if (!api) return

            const loop = api.internalEngine().options.loop
            setCanScrollPrev(api.canScrollPrev() || loop)
            setCanScrollNext(api.canScrollNext() || loop)
        }, [])

        const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])
        const scrollNext = React.useCallback(() => api?.scrollNext(), [api])

        React.useEffect(() => {
            if (!api || !setApi) return
            setApi(api)
        }, [api, setApi])

        React.useEffect(() => {
            if (!api) return

            onSelect(api)
            api.on("reInit", onSelect)
            api.on("select", onSelect)

            return () => {
                api.off("select", onSelect)
                api.off("reInit", onSelect)
            }
        }, [api, onSelect])

        return (
            <CarouselContext.Provider
                value={{
                    api,
                    carouselRef,
                    orientation,
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <div ref={ref} className={cn("relative w-full", className)}>
                    {children}
                </div>
            </CarouselContext.Provider>
        )
    }
)

Carousel.displayName = "Carousel"

/* Track + Viewport */
export const CarouselContent = React.forwardRef(
    ({ className, children, ...props }, ref) => {
        const { carouselRef, orientation } = useCarousel()

        return (
            <div ref={carouselRef} className="overflow-hidden w-full">
                <div
                    ref={ref}
                    className={cn(
                        "flex",
                        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                        className
                    )}
                    {...props}
                >
                    {children}
                </div>
            </div>
        )
    }
)

CarouselContent.displayName = "CarouselContent"

export const CarouselItem = React.forwardRef(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
            {...props}
        />
    )
)

CarouselItem.displayName = "CarouselItem"

export const CarouselPrevious = React.forwardRef(
    ({ className, variant = "outline", size = "icon", ...props }, ref) => {
        const { scrollPrev, canScrollPrev } = useCarousel()

        return (
            <Button
                ref={ref}
                variant={variant}
                size={size}
                className={cn(
                    "absolute left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 backdrop-blur hover:bg-white z-20 cursor-pointer",
                    className
                )}
                disabled={!canScrollPrev}
                onClick={scrollPrev}
                {...props}
            >
                <ArrowLeft className="h-11 w-6" />
                <span className="sr-only">Previous slide</span>
            </Button>
        )
    }
)

CarouselPrevious.displayName = "CarouselPrevious"

export const CarouselNext = React.forwardRef(
    ({ className, variant = "outline", size = "icon", ...props }, ref) => {
        const { scrollNext, canScrollNext } = useCarousel()

        return (
            <Button
                ref={ref}
                variant={variant}
                size={size}
                className={cn(
                    "absolute right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-red-600 backdrop-blur hover:bg-white z-20 cursor-pointer",
                    className
                )}
                disabled={!canScrollNext}
                onClick={scrollNext}
                {...props}
            >
                <ArrowRight className="h-6 w-6" />
                <span className="sr-only">Next slide</span>
            </Button>
        )
    }
)

CarouselNext.displayName = "CarouselNext"



