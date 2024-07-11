import type { Counterscale } from "./types"

declare global {
  interface Window {
    counterscale: Counterscale
  }
}
