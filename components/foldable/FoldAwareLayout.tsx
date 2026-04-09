"use client"

import { useFoldableState } from "@/hooks/use-foldable-state"
import { type ReactNode } from "react"

/**
 * Root wrapper that exposes fold state as data-attributes.
 * CSS uses these attributes for layout decisions.
 *
 * Attributes exposed:
 * - data-fold="confirmed" | "adaptive-two-pane" | undefined
 * - data-fold-mode="standard-phone" | "fold-cover-screen-likely" | "fold-inner-screen-confirmed" | "large-adaptive-two-pane"
 * - data-has-segments="true" | "false"
 * - data-segment-count="1" | "2" | ...
 */
export function FoldAwareLayout({ children }: { children: ReactNode }) {
  const { mode, hasViewportSegments, segmentCount } = useFoldableState()

  const dataFold = mode === "fold-inner-screen-confirmed" ? "confirmed"
    : mode === "large-adaptive-two-pane" ? "adaptive-two-pane"
    : undefined

  return (
    <div
      data-fold={dataFold}
      data-fold-mode={mode}
      data-has-segments={hasViewportSegments ? "true" : "false"}
      data-segment-count={String(segmentCount)}
    >
      {children}
    </div>
  )
}

export { useFoldableState }
