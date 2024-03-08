import { describe, expect, it } from "vitest";
import { MorningRoutine } from "./MorningRoutine.js";


describe("MorningRoutine", () => {
  it("displays no exercise when outside schedule", () => {
    const morningRoutine = new MorningRoutine()

    const activity: string = morningRoutine.whatShouldIDoNow()

    expect(activity).toBe("No activity")
  })
})
