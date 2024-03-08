import { describe, expect, it } from "vitest"
import { MorningRoutine } from "./MorningRoutine.js"

describe("MorningRoutine", () => {
  it("displays no exercise when outside schedule", () => {
    const morningRoutine = createMorningRoutine("2024-03-08T18:30:00.000Z")

    const activity = morningRoutine.whatShouldIDoNow()

    expect(activity).toBe("No activity")
  })

  it("displays Do exercise at 06:30", () => {
    const morningRoutine = createMorningRoutine("2024-03-08T06:30:00.000Z")

    const activity = morningRoutine.whatShouldIDoNow()

    expect(activity).toBe("Do exercise")
  })

  it("displays Read and Study at 7:30", () => {
    const morningRoutine = createMorningRoutine("2024-03-08T07:30:00.000Z")

    const activity = morningRoutine.whatShouldIDoNow()

    expect(activity).toBe("Read and Study")
  })

  it("displays Have breakfast at 8:30", () => {
    const morningRoutine = createMorningRoutine("2024-03-08T08:30:00.000Z")

    const activity = morningRoutine.whatShouldIDoNow()

    expect(activity).toBe("Have breakfast")
  })
})

function createMorningRoutine(isoTimestamp: string) {
  const today = new Date(isoTimestamp)
  const clockStub = { now: () => today }
  return new MorningRoutine(clockStub)
}
