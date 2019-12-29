import * as ASSETS from '../constants/assets'

export default class Task {
  public objective: string
  public questGiverText: string
  public questCompleteText: string
  public sound: any
  public goalTarget: string
  public giver: string
  public complete: boolean

  constructor(
    objective,
    questGiverText,
    questCompleteText,
    giver,
    goalTarget,
    sound,
    complete = false
  ) {
    this.objective = objective
    this.questGiverText = questGiverText
    this.questCompleteText = questCompleteText
    this.goalTarget = goalTarget
    this.giver = giver
    this.sound = sound
    this.complete = complete
  }
}
