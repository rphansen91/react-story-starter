import { toggleDelta } from "redux-delta/lib/dx/toggle"

export const ready = toggleDelta("ready", { active: false })
