import { describe, expect, it } from "vitest"
import { MorningRoutine } from "./MorningRoutine.js"

describe("MorningRoutine", () => {
  it("displays Do exercise at 06:30", () => {
    const morningRoutine = createMorningRoutine(6, 30)

    const activity = morningRoutine.whatShouldIDoNow()

    expect(activity).toBe("Do exercise")
  })

  it("displays Read and Study at 7:30", () => {
    const morningRoutine = createMorningRoutine(7, 30)

    const activity = morningRoutine.whatShouldIDoNow()

    expect(activity).toBe("Read and Study")
  })

  it("displays Have breakfast at 8:30", () => {
    const morningRoutine = createMorningRoutine(8, 30)

    const activity = morningRoutine.whatShouldIDoNow()

    expect(activity).toBe("Have breakfast")
  })

  it("displays no exercise when outside schedule", () => {
    const morningRoutine = createMorningRoutine(18, 30)

    const activity = morningRoutine.whatShouldIDoNow()

    expect(activity).toBe("No activity")
  })
})

function createMorningRoutine(hours: number, minutes: number) {
  const today = new Date("2024-03-08T00:00:00.000Z")
  today.setHours(hours)
  today.setMinutes(minutes)
  const clockStub = { now: () => today }
  return new MorningRoutine(clockStub)
}
