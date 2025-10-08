"use client"
import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, Transition } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface FlipStackCard {
  id: number
  content?: React.ReactNode
  bg?: string
}
interface FlipStackProps { cards?: FlipStackCard[] }

export default function FlipStack({
  cards = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
    { id: 5, content: "Card 5" },
  ],
}: FlipStackProps) {
  const [isInView, setIsInView] = useState(false)
  const [screenSize, setScreenSize] = useState<'mobile' | 'small-tablet' | 'tablet' | 'medium' | 'desktop'>('desktop')
  const [winW, setWinW] = useState(0) // viewport width
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Follow + tilt motion values
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const moveX = useMotionValue(0)
  const moveY = useMotionValue(0)
  const tiltXSpring = useSpring(tiltX, { stiffness: 220, damping: 20, mass: 0.6 })
  const tiltYSpring = useSpring(tiltY, { stiffness: 220, damping: 20, mass: 0.6 })
  const moveXSpring = useSpring(moveX, { stiffness: 260, damping: 24, mass: 0.6 })
  const moveYSpring = useSpring(moveY, { stiffness: 260, damping: 24, mass: 0.6 })

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth
      setWinW(width)

      if (width < 720) {
        setScreenSize('mobile')
      } else if (width >= 720 && width < 900) {
        setScreenSize('small-tablet')
      } else if (width >= 900 && width < 1024) {
        setScreenSize('tablet')
      } else if (width >= 1024 && width < 1280) {
        setScreenSize('medium')
      } else {
        setScreenSize('desktop')
      }
    }
    checkScreen()
    window.addEventListener("resize", checkScreen)

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true)
    }, { threshold: 0.3 })
    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      window.removeEventListener("resize", checkScreen)
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  const isMobile = screenSize === 'mobile'

  // Mobile autoplay
  useEffect(() => {
    if (!isMobile || !isInView) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isMobile, isInView, cards.length])

  // Outside click close
  useEffect(() => {
    const onDocPointerDown = (e: PointerEvent) => {
      if (selectedIndex === null) return
      const el = cardRefs.current[selectedIndex]
      if (!el) { setSelectedIndex(null); resetFollow(); return }
      if (el.contains(e.target as Node)) return
      setSelectedIndex(null)
      resetFollow()
    }
    document.addEventListener("pointerdown", onDocPointerDown, true)
    return () => document.removeEventListener("pointerdown", onDocPointerDown, true)
  }, [selectedIndex])

  const getRotation = (i: number) => {
    const rotations = [-8, 5, -3, 7, -5, 4, -6, 8, -2, 3]
    return rotations[i % rotations.length]
  }
  const isActive = (i: number) => i === activeIndex

  // Helpers
  const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t

  // Responsive values (width fixed for 720–899, only text scales 720–798)
  const getResponsiveValues = () => {
    switch (screenSize) {
      case 'mobile': {
        return {
          cardWidth: 280,
          cardHeight: 340,
          containerHeight: 420,
          containerWidth: '100%',
          maxWidth: 320,
          spreadX: 0,
          spreadY: 0,
          rotateMultiplier: 0,
          selectedScale: 1.05,
          fontScale: 0.98,
        }
      }
      case 'small-tablet': {
        // Smooth text-only scale between 720–798
        const t = clamp((winW - 720) / 78, 0, 1) // 0 at 720, 1 near 798
        const fontScale = lerp(0.96, 1.0, t)

        return {
          cardWidth: 250,           // FIXED width (no shrinking)
          cardHeight: 340,          // FIXED height
          containerHeight: 460,
          containerWidth: '100%',
          maxWidth: 650,
          spreadX: 95,
          spreadY: 40,
          rotateMultiplier: 11,
          selectedScale: 1.1,
          fontScale,
        }
      }
      case 'tablet': {
        return {
          cardWidth: 260,
          cardHeight: 350,
          containerHeight: 480,
          containerWidth: '100%',
          maxWidth: 750,
          spreadX: 120,
          spreadY: 45,
          rotateMultiplier: 12,
          selectedScale: 1.12,
          fontScale: 1,
        }
      }
      case 'medium': {
        return {
          cardWidth: 270,
          cardHeight: 360,
          containerHeight: 500,
          containerWidth: '100%',
          maxWidth: 900,
          spreadX: 140,
          spreadY: 50,
          rotateMultiplier: 13,
          selectedScale: 1.18,
          fontScale: 1,
        }
      }
      default: { // desktop
        return {
          cardWidth: 300,
          cardHeight: 380,
          containerHeight: 540,
          containerWidth: '100%',
          maxWidth: 1150,
          spreadX: 180,
          spreadY: 55,
          rotateMultiplier: 14,
          selectedScale: 1.22,
          fontScale: 1,
        }
      }
    }
  }

  const responsive = getResponsiveValues()

  const getCardVariants = (index: number) => {
    const total = cards.length
    const centerIndex = Math.floor(total / 2)
    const positionFromCenter = index - centerIndex

    if (isMobile) {
      return {
        initial: { opacity: 0, scale: 0.9, z: -100, rotate: getRotation(index), y: 100 },
        animate: {
          opacity: isActive(index) ? 1 : 0.7,
          scale: isActive(index) ? 1 : 0.95,
          z: isActive(index) ? 0 : -100,
          rotate: isActive(index) ? 0 : getRotation(index),
          zIndex: isActive(index) ? 40 : total + 2 - index,
          y: isActive(index) ? [0, -50, 0] : 0,
        },
      }
    }
    return {
      initial: {
        x: 0,
        y: index * 20 + 120,
        rotate: getRotation(index),
        scale: 1,
        zIndex: total - index,
        opacity: 1,
        filter: "none",
      },
      animate: {
        x: positionFromCenter * responsive.spreadX,
        y: Math.abs(positionFromCenter) * responsive.spreadY,
        rotate: positionFromCenter * responsive.rotateMultiplier,
        scale: 1,
        zIndex: total - Math.abs(positionFromCenter),
        opacity: 1,
        filter: "none",
      },
    }
  }

  const CardWithEffects = (
    card: FlipStackCard,
    opts: { themeOn: boolean; sheen?: boolean; glow?: boolean; fontScale?: number }
  ) => {
    const { themeOn, sheen, glow, fontScale = 1 } = opts
    return (
      <div className="relative w-full h-full max-[719px]:overflow-hidden max-[719px]:rounded-2xl">
        {glow && (
          <>
            <div
              className="
                pointer-events-none absolute -inset-4 max-[719px]:inset-0 rounded-[20px] opacity-90
                bg-[conic-gradient(at_50%_50%,#22d3ee33_0deg,#a78bfa33_120deg,#f472b633_240deg,#22d3ee33_360deg)]
                blur-xl
                animate-[spin_10s_linear_infinite]
              "
            />
            <div
              className="
                pointer-events-none absolute -inset-3 max-[719px]:inset-0 rounded-[18px]
                bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.25),rgba(168,85,247,0.22),rgba(236,72,153,0.18),transparent_70%)]
                blur-lg
                animate-[pulseGlow_2400ms_ease-in-out_infinite]
              "
            />
          </>
        )}

        <Card
          className={[
            "relative w-full h-full shadow-lg border overflow-hidden rounded-xl transition-colors duration-300",
            themeOn
              ? "bg-white text-black dark:bg-black dark:text-white border-black/10 dark:border-white/10"
              : "bg-transparent border-white/10",
            glow
              ? "ring-1 ring-cyan-400/35 dark:ring-cyan-300/25 shadow-[0_8px_32px_-8px_rgba(34,211,238,0.35),0_0_48px_8px_rgba(168,85,247,0.25)]"
              : "",
          ].join(" ")}
        >
          {card.bg && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 will-change-transform"
              style={{ backgroundImage: `url(${card.bg})` }}
            />
          )}
          {!themeOn && (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/70" />
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
                style={{ boxShadow: "inset 0 0 120px rgba(255,255,255,0.08)" }}
              />
            </>
          )}
          {sheen && <div className="absolute inset-0 pointer-events-none sheen" />}

          <CardContent
            className="relative z-10 p-0 h-full flex items-center justify-center text-base font-semibold"
            style={{ fontSize: `${16 * (responsive as any).fontScale}px` }}
          >
            {card.content ?? `Card ${card.id}`}
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || selectedIndex === null) return
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const nx = (e.clientX - cx) / (rect.width / 2)
    const ny = (e.clientY - cy) / (rect.height / 2)
    const clamp1 = (v: number) => Math.max(-1, Math.min(1, v))
    const dx = clamp1(nx)
    const dy = clamp1(ny)
    const maxTilt = 6
    const maxMove = 12
    tiltY.set(dx * maxTilt)
    tiltX.set(-dy * maxTilt)
    moveX.set(dx * maxMove)
    moveY.set(dy * maxMove)
  }

  const resetFollow = () => {
    tiltX.set(0); tiltY.set(0); moveX.set(0); moveY.set(0)
  }

  const focusSpring = { type: "spring" as const, stiffness: 240, damping: 22, mass: 0.85 }
  const restSpring = { type: "spring" as const, stiffness: 260, damping: 28, mass: 0.9 }

  const bobMotion = (): { animate: any; transition: Transition } => ({
    animate: { y: [0, -4, 0] },
    transition: {
      duration: 2.6,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut"
    },
  })

  return (
    <div className="w-full mb-16 max-[719px]:overflow-x-hidden">
      <div className="w-full flex justify-center items-center px-4">
        <div
          ref={containerRef}
          className="relative mx-auto isolate max-[719px]:overflow-hidden"
          style={{
            perspective: "1000px",
            height: `${responsive.containerHeight}px`,
            width: responsive.containerWidth,
            maxWidth: `${responsive.maxWidth}px`,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetFollow}
        >
          {isMobile ? (
            <div className="relative h-full w-full flex items-center justify-center">
              <AnimatePresence>
                {cards.map((card, index) => {
                  const variants = getCardVariants(index)
                  const isActiveCard = isActive(index)
                  return (
                    <motion.div
                      key={card.id}
                      className="absolute origin-bottom flex items-center justify-center"
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      exit={{ opacity: 0, scale: 0.9, z: 100, rotate: getRotation(index) }}
                      variants={variants}
                      transition={{ duration: 0.4, ease: "easeInOut", delay: index * 0.05 }}
                    >
                      <motion.div
                        style={{
                          width: `${responsive.cardWidth}px`,
                          height: `${responsive.cardHeight}px`
                        }}
                        {...bobMotion()}
                        transition={{
                          ...bobMotion().transition,
                          delay: index * 0.12
                        }}
                      >
                        {CardWithEffects(card, {
                          themeOn: true,
                          sheen: isActiveCard,
                          glow: isActiveCard,
                          fontScale: (responsive as any).fontScale
                        })}
                      </motion.div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          ) : (
            <div className="relative h-full w-full flex items-center justify-center">
              {cards.map((card, index) => {
                const { initial, animate: baseAnimate } = getCardVariants(index)
                const isSelected = selectedIndex === index
                const someSelected = selectedIndex !== null

                const animateTarget = isSelected
                  ? { x: 0, y: 0, rotate: 0, scale: responsive.selectedScale, opacity: 1, zIndex: 100, filter: "none" }
                  : (someSelected
                    ? { ...baseAnimate, opacity: 0.26, scale: 0.96, zIndex: 1, filter: "blur(2.5px) brightness(0.9)" }
                    : baseAnimate)

                const transition = isSelected
                  ? { ...focusSpring, opacity: { duration: 0.22 } }
                  : { ...restSpring, opacity: { duration: 0.22 } }

                return (
                  <motion.div
                    key={card.id}
                    ref={el => { cardRefs.current[index] = el }}
                    className="
                      absolute origin-bottom rounded-xl
                      will-change-[transform,filter]
                      transition-[filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                      cursor-pointer
                    "
                    initial={initial}
                    animate={isInView ? animateTarget : initial}
                    transition={transition}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (!isSelected) setSelectedIndex(index)
                    }}
                    aria-pressed={isSelected}
                    style={{ pointerEvents: someSelected && !isSelected ? "none" : "auto" }}
                  >
                    <motion.div
                      style={
                        isSelected
                          ? {
                            width: `${responsive.cardWidth}px`,
                            height: `${responsive.cardHeight}px`,
                            rotateX: tiltXSpring,
                            rotateY: tiltYSpring,
                            x: moveXSpring,
                            y: moveYSpring,
                            transformPerspective: 1000,
                          }
                          : {
                            width: `${responsive.cardWidth}px`,
                            height: `${responsive.cardHeight}px`,
                            rotateX: 0,
                            rotateY: 0,
                            x: 0,
                            y: 0,
                            transformPerspective: 1000
                          }
                      }
                      {...(!someSelected ? bobMotion() : {})}
                    >
                      {CardWithEffects(card, {
                        themeOn: isSelected,
                        sheen: isSelected,
                        glow: isSelected,
                        fontScale: (responsive as any).fontScale
                      })}
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes sheenMove {
          0%   { transform: translateX(-120%) skewX(-18deg); opacity: 0; }
          20%  { opacity: 0.35; }
          100% { transform: translateX(120%) skewX(-18deg); opacity: 0; }
        }
        .sheen::before {
          content: "";
          position: absolute;
          inset: -30% -60%;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.28) 50%,
            rgba(255,255,255,0) 100%
          );
          filter: blur(8px);
          animation: sheenMove 1.1s ease-out 0.15s 1 forwards;
          pointer-events: none;
        }
        :global(html.dark) .sheen::before {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.22) 50%,
            rgba(255,255,255,0) 100%
          );
        }
        @keyframes pulseGlow {
          0%   { opacity: 0.65; transform: scale(0.98); }
          50%  { opacity: 1;    transform: scale(1.02); }
          100% { opacity: 0.65; transform: scale(0.98); }
        }
      `}</style>
    </div>
  )
}