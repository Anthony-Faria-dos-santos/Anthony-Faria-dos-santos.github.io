"use client"

import { useEffect, useMemo, useState } from "react"

export type FoldableRuntimeMode =
  | "standard-phone"
  | "fold-cover-screen-likely"
  | "fold-inner-screen-confirmed"
  | "large-adaptive-two-pane"

export type FoldableState = {
  /** Current runtime mode */
  mode: FoldableRuntimeMode
  /** Shorthand: true if mode is confirmed or adaptive-two-pane */
  isFold: boolean
  /** True if browser exposes viewport segments API */
  hasViewportSegments: boolean
  /** Number of viewport segments detected (1 = normal, 2 = fold open) */
  segmentCount: number
  /** Legacy compat */
  isFoldableConfirmed: boolean
}

function isEligibleForAdaptiveTwoPane(): boolean {
  const w = window.innerWidth
  const h = window.innerHeight
  const ratio = w / h
  const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches
  if (!isTouch) return false
  // Fold 6 inner = ~1008 CSS px, Fold 5 = ~908px. Upper bound 1100 covers all folds.
  return w >= 720 && w <= 1100 && h >= 700 && h <= 1400 && ratio >= 0.75 && ratio <= 1.45
}

function getViewportSegments(): number {
  try {
    // Primary: window.viewport.segments (standard Foldable APIs)
    const wp = (window as unknown as Record<string, unknown>).viewport as Record<string, unknown> | undefined
    if (wp && Array.isArray(wp.segments)) return (wp.segments as unknown[]).length

    // Fallback: visualViewport.segments (some implementations)
    const vv = (window as unknown as Record<string, unknown>).visualViewport as Record<string, unknown> | undefined
    if (vv && Array.isArray(vv.segments)) return (vv.segments as unknown[]).length
  } catch { /* ignore */ }
  return 1
}

function checkCssSegmentsSupport(): boolean {
  try {
    // Media features can't be checked via CSS.supports().
    // Use matchMedia to test if the browser understands the query.
    // A browser that doesn't support the feature will return "not all".
    const mql = window.matchMedia("(horizontal-viewport-segments: 1)")
    return mql.media !== "not all"
  } catch { return false }
}

/**
 * Foldable runtime detection hook.
 *
 * Architecture:
 * - This hook exposes runtime STATE, not layout geometry.
 * - Layout geometry comes from CSS via @media(horizontal-viewport-segments:2) + env().
 * - This hook feeds data-attributes that CSS uses as fallback selectors.
 * - SSR-safe: returns neutral state on server (standard-phone).
 */
export function useFoldableState(): FoldableState {
  const [segmentCount, setSegmentCount] = useState(1)
  const [adaptiveEligible, setAdaptiveEligible] = useState(false)
  const [cssSupport, setCssSupport] = useState(false)

  useEffect(() => {
    function compute() {
      setSegmentCount(getViewportSegments())
      setAdaptiveEligible(isEligibleForAdaptiveTwoPane())
      setCssSupport(checkCssSegmentsSupport())
    }
    compute()
    window.addEventListener("resize", compute)
    window.addEventListener("orientationchange", compute)
    return () => {
      window.removeEventListener("resize", compute)
      window.removeEventListener("orientationchange", compute)
    }
  }, [])

  return useMemo(() => {
    const hasViewportSegments = segmentCount > 1 || cssSupport
    const isFoldableConfirmed = segmentCount > 1

    let mode: FoldableRuntimeMode = "standard-phone"
    if (isFoldableConfirmed) {
      mode = "fold-inner-screen-confirmed"
    } else if (adaptiveEligible) {
      mode = "large-adaptive-two-pane"
    }

    const isFold = mode === "fold-inner-screen-confirmed" || mode === "large-adaptive-two-pane"

    return { mode, isFold, hasViewportSegments, segmentCount, isFoldableConfirmed }
  }, [segmentCount, adaptiveEligible, cssSupport])
}
