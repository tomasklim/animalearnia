export enum SceneName {
  smallZooMap = 'small_zoo_map',
  preloader = 'preloader',
}

export enum Color {
  white = '#ffffff',
  black = '#000',
  green = '#1eb960',
  orange = '#F9A602',
  red = '#ff0000',
}

export enum Direction {
  down = 'down',
  up = 'up',
  left = 'left',
  right = 'right',
}

export enum AnimalKind {
  giraffe = 'giraffe',
  tiger = 'tiger',
  elephant = 'elephant',
  lion = 'lion',
  zebra = 'zebra',
}

export enum Star {
  empty = 'empty',
  full = 'full',
}

export enum AudioName {
  elephantQuest = 'Elephant-quest.mp3',
  zebraQuest = 'Zebra-quest.mp3',
  giraffeQuest = 'Giraffe-quest.mp3',
  tigerQuest = 'Tiger-quest.mp3',
  lionQuest = 'Lion-quest.mp3',
  Level1Complete = 'Level1-complete.mp3',
  level1Welcome = 'Level1-welcome.mp3',
  elephantVoice = 'Elephant-voice.mp3',
  zebraVoice = 'Zebra-voice.mp3',
  giraffeVoice = 'Giraffe-voice.mp3',
  tigerVoice = 'Tiger-voice.mp3',
  lionVoice = 'Lion-voice.mp3',
  errorSound = 'Error.mp3',
}

export enum CharacterType {
  player = 'player',
  questGiver = 'quest_giver',
}

export enum QuestGiverState {
  newQuest = 0,
  incompleteQuest,
  completeQuest,
  noQuest,
}
