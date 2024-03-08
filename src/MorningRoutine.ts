export class MorningRoutine {


  constructor(private today: Date) {
  }

  whatShouldIDoNow() {
    const hours = this.today.getHours();
    if (hours === 6) {
      return "Do exercise"
    }

    return "No activity";
  }
}
