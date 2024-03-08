export class Clock {
  now() {
    return new Date()
  }
}

export class MorningRoutine {
  private readonly clock: Clock

  constructor(clock: Clock) {
    this.clock = clock
  }

  whatShouldIDoNow() {
    const hours = this.clock.now().getHours()
    if (hours === 6) {
      return "Do exercise"
    } else if (hours === 7) {
      return "Read and Study"
    }
    return "No activity"
  }
}
