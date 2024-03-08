import { describe, expect, it } from "vitest";
import { MorningRoutine } from "./MorningRoutine.js";


describe("MorningRoutine", () => {
  it("displays no exercise when outside schedule", () => {
    const morningRoutine = new MorningRoutine(new Date())

    const activity: string = morningRoutine.whatShouldIDoNow()

    expect(activity).toBe("No activity")
  })

  it("displays Do exercise at 06:30", () => {
    const today = new Date("2024-03-08T05:30:00.000Z");
    const morningRoutine = new MorningRoutine(today)

    const activity: string = morningRoutine.whatShouldIDoNow()

    expect(activity).toBe("Do exercise")
  })
})
