

export type BackupItem = {
  id: string
  name: string
  description: string
  image: string
}

export type BackupShip = {
  name: string

  fuel: number
  maxFuel: number

  health: number
  maxHealth: number
}

export type BackupPlayer = {
  luck: number,
  money: number,
  health: number,

  ship: BackupShip
  items: Array<BackupItem>
}

export type BackupGame = {
  player?: BackupPlayer
  planets: Array<number>

  currentRoomIndex: number

  inspace: boolean
  inevent: boolean
  canevent: boolean

  log: String
  distance: number
}
