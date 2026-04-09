import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Deterministic number formatter. Uses fr-FR locale explicitly
 * so SSR (Node.js) and CSR (browser) produce identical output.
 * Example: 18400 => "18 400"
 */
const numberFormatter = new Intl.NumberFormat('fr-FR')

export function formatNumber(n: number): string {
  return numberFormatter.format(n)
}
