import { AudioName } from '../enums';

export default class Task {
  public objective: string

  public questGiverText: string

  public questCompleteText: string

  public sound: AudioName

  public goalTarget: string | string[]

  public giver: string

  public complete: boolean

  public goalStatus: number

  public goalTotal: number

  constructor(
    objective: string,
    questGiverText: string,
    questCompleteText: string,
    giver: string,
    goalTarget: string | string[],
    sound: AudioName,
    complete = false,
  ) {
    this.objective = objective;
    this.questGiverText = questGiverText;
    this.questCompleteText = questCompleteText;
    this.goalTarget = goalTarget;
    this.giver = giver;
    this.sound = sound;
    this.complete = complete;
    this.goalStatus = 0;
    this.goalTotal = typeof this.goalTarget === 'object' ? this.goalTarget.length : 1;
  }
}
