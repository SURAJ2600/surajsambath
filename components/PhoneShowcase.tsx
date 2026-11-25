'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import clsx from 'clsx'
import { ChevronLeft, ChevronRight, Github, Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import { profile } from '@/lib/data'

const AUTOPLAY_MS = 5000
const SWIPE_THRESHOLD = 50

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

function ProfileScreen() {
  const [imgFailed, setImgFailed] = useState(false)
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-accent/60 bg-line">
        {!imgFailed && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${basePath}/profile.jpg`}
            alt={profile.name}
            className="h-full w-full object-cover"
            draggable={false}
            onError={() => setImgFailed(true)}
          />
        )}
      </div>
      <div>
        <div className="text-lg font-semibold text-ink">{profile.name}</div>
        <div className="font-mono text-xs text-muted">{profile.role}</div>
      </div>
      <div className="flex flex-wrap justify-center gap-1.5">
        {['Kotlin', 'Compose', 'Media3', 'AI'].map((t) => (
          <span key={t} className="rounded-md bg-line/80 px-2 py-0.5 font-mono text-[10px] text-ink/70">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-2 font-mono text-[10px] text-muted">swipe →</div>
    </div>
  )
}

function StatsScreen() {
  const r = 42
  const c = 2 * Math.PI * r
  return (
    <div className="flex h-full flex-col gap-4 px-5 pt-4">
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted">Mindvalley · vitals</div>
      <div className="flex items-center gap-4 rounded-xl bg-line/50 p-3">
        <svg viewBox="0 0 100 100" className="h-20 w-20 -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="#1f1f23" strokeWidth="10" />
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="#7cf3a0"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - 0.996)}
          />
        </svg>
        <div>
          <div className="text-2xl font-semibold text-ink">99.6%</div>
          <div className="text-[11px] text-muted">crash-free sessions</div>
          <div className="font-mono text-[10px] text-accent">↑ from 97%</div>
        </div>
      </div>
      <div className="rounded-xl bg-line/50 p-3">
        <div className="mb-2 flex justify-between text-[11px]">
          <span className="text-muted">Cold start</span>
          <span className="font-mono text-accent">−30%</span>
        </div>
        <div className="mb-1 h-2 rounded-full bg-bg">
          <div className="h-2 w-full rounded-full bg-muted/50" />
        </div>
        <div className="h-2 rounded-full bg-bg">
          <div className="h-2 w-[70%] rounded-full bg-accent" />
        </div>
        <div className="mt-1 font-mono text-[9px] text-muted">before · after (Baseline Profiles)</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-line/50 p-3">
          <div className="text-lg font-semibold text-ink">1M+</div>
          <div className="text-[10px] text-muted">Mindvalley installs</div>
        </div>
        <div className="rounded-xl bg-line/50 p-3">
          <div className="text-lg font-semibold text-ink">−15%</div>
          <div className="text-[10px] text-muted">CI build time</div>
        </div>
      </div>
    </div>
  )
}

function PlayerScreen() {
  return (
    <div className="flex h-full flex-col px-5 pt-4">
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted">Now playing</div>
      <div className="mt-4 aspect-square w-full rounded-2xl bg-gradient-to-br from-accent/70 via-emerald-700 to-indigo-800 shadow-lg shadow-accent/10" />
      <div className="mt-4">
        <div className="text-sm font-semibold text-ink">Morning Meditation</div>
        <div className="text-[11px] text-muted">Media3 · offline download ready</div>
      </div>
      <div className="mt-4 h-1 rounded-full bg-line">
        <div className="phone-progress h-1 rounded-full bg-accent" />
      </div>
      <div className="mt-1 flex justify-between font-mono text-[9px] text-muted">
        <span>04:12</span>
        <span>12:00</span>
      </div>
      <div className="mt-4 flex items-center justify-center gap-6 text-ink">
        <SkipBack className="h-5 w-5" />
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-bg">
          <Pause className="h-5 w-5" />
        </span>
        <SkipForward className="h-5 w-5" />
      </div>
      <div className="mt-auto pb-2 text-center font-mono text-[9px] text-muted">
        ExoPlayer → Media3 · background playback resumption
      </div>
    </div>
  )
}

function ChatScreen() {
  return (
    <div className="flex h-full flex-col px-4 pt-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 font-mono text-[10px] text-accent">
          AI
        </span>
        <div>
          <div className="text-xs font-semibold text-ink">Vibrantly</div>
          <div className="font-mono text-[9px] text-accent">online</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 text-[11px] leading-snug">
        <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-accent px-3 py-2 text-bg">
          Log my lunch: dal, rice and a salad 🥗
        </div>
        <div className="max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-line px-3 py-2 text-ink">
          Logged ✓ About <b>620 kcal</b>, 22 g protein. You&rsquo;re at 1,340 of 2,000 kcal today.
        </div>
        <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-accent px-3 py-2 text-bg">
          Can you read my blood test?
        </div>
        <div className="flex w-14 items-center justify-center gap-1 self-start rounded-2xl rounded-bl-sm bg-line px-3 py-3">
          <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted" />
          <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted [animation-delay:150ms]" />
          <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted [animation-delay:300ms]" />
        </div>
      </div>
      <div className="pb-2 text-center font-mono text-[9px] text-muted">LLM chat · Adapty credits · Cloud Run</div>
    </div>
  )
}

function GitHubScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-line">
        <Github className="h-8 w-8 text-ink" />
      </span>
      <div>
        <div className="text-base font-semibold text-ink">@SURAJ2600</div>
        <div className="text-[11px] text-muted">Open source, side projects and experiments</div>
      </div>
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-accent px-4 py-2 font-mono text-[11px] text-bg transition-opacity hover:opacity-90"
      >
        View my GitHub →
      </a>
    </div>
  )
}

const screens: { title: string; node: ReactNode }[] = [
  { title: 'Profile', node: <ProfileScreen /> },
  { title: 'Performance', node: <StatsScreen /> },
  { title: 'Media playback', node: <PlayerScreen /> },
  { title: 'Vibrantly AI', node: <ChatScreen /> },
  { title: 'GitHub', node: <GitHubScreen /> },
]

export function PhoneShowcase() {
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [dragX, setDragX] = useState(0)
  const startX = useRef<number | null>(null)
  const count = screens.length

  const paused = hovered || userPaused || dragging

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduce) return
    const t = window.setTimeout(() => go(index + 1), AUTOPLAY_MS)
    return () => window.clearTimeout(t)
  }, [index, paused, go])


  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX
    setDragging(true)
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current !== null) setDragX(e.clientX - startX.current)
  }
  const onPointerUp = () => {
    if (dragX > SWIPE_THRESHOLD) go(index - 1)
    else if (dragX < -SWIPE_THRESHOLD) go(index + 1)
    startX.current = null
    setDragging(false)
    setDragX(0)
  }

  return (
    <div
      className="relative mx-auto flex w-full max-w-[300px] flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-accent/10 blur-3xl" />

      {/* Phone frame */}
      <div className="relative w-full rounded-[2.6rem] border border-line bg-[#050506] p-2.5 shadow-2xl shadow-black/60">
        <div
          className="relative aspect-[9/19] overflow-hidden rounded-[2.1rem] bg-panel outline-none focus-visible:ring-2 focus-visible:ring-accent"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={`Phone showcase: ${screens[index].title}`}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') go(index + 1)
            if (e.key === 'ArrowLeft') go(index - 1)
          }}
        >
          {/* Status bar */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-3 font-mono text-[10px] text-ink/80">
            <span>9:41</span>
            <span className="h-3.5 w-3.5 rounded-full bg-black ring-1 ring-line" aria-hidden />
            <span className="flex items-center gap-1">
              <span>5G</span>
              <span className="inline-block h-2 w-4 rounded-sm border border-ink/60 p-[1px]">
                <span className="block h-full w-3/4 rounded-[1px] bg-accent" />
              </span>
            </span>
          </div>

          {/* Screens strip */}
          <div
            className={clsx(
              'flex h-full touch-pan-y select-none pt-9',
              !dragging && 'transition-transform duration-500 ease-out',
            )}
            style={{ transform: `translateX(calc(${-index * 100}% + ${dragX}px))` }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {screens.map((s, i) => (
              <div key={s.title} className="h-full w-full shrink-0 pb-6" aria-hidden={i !== index}>
                {s.node}
              </div>
            ))}
          </div>

          {/* Gesture pill */}
          <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-ink/40" />
        </div>
      </div>

      {/* Controls */}
      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous screen"
          className="rounded-full border border-line p-1.5 text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-1.5">
          {screens.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${s.title}`}
              className={clsx(
                'h-1.5 rounded-full transition-all',
                i === index ? 'w-6 bg-accent' : 'w-1.5 bg-muted/40 hover:bg-muted',
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next screen"
          className="rounded-full border border-line p-1.5 text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setUserPaused((p) => !p)}
          aria-label={userPaused ? 'Play' : 'Pause'}
          className="ml-1 rounded-full border border-line p-1.5 text-muted transition-colors hover:border-accent hover:text-accent"
        >
          {userPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
        </button>
      </div>
      <div className="mt-2 font-mono text-[11px] text-muted">{screens[index].title}</div>
    </div>
  )
}
