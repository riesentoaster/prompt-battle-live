export enum GameStage {
  SelectingUserName,
  SelectingChallenge,
  PresentingChallenge,
  EnteringPrompts,
  GeneratingImages,
  SelectingImage
}

export interface Settings {
  users: {[user: string]: string}
  challenge: string
  stage: GameStage
  timerEnd: Date
  imageSelections: {[user: string]: number}
}

export interface Prompt {
  user: string
  prompt: string
}

export interface UserNameUpdate {
  old: string
  new: string
}

export interface ImageSelectUpdate {
  userName: string
  index: number
}

export const defaultSettings: Settings = {
  challenge: '',
  users: {},
  imageSelections: {},
  stage: GameStage.SelectingUserName,
  timerEnd: new Date( 0 ),
}
