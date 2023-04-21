

class Backup {
  public date: number
  public data: String

  constructor(data: String){
    this.date = Date.now()
    this.data = data
  }
}
export default class BackupManager {
  
  public save() {
    const data = JSON.stringify(["data1", "data2"])
    const backup = new Backup(data)

    let backups = [...this.getBackups()]
    backups.push(backup)
    localStorage.setItem('space-game-backup', JSON.stringify(backups))
  }

  public getBackups()
  {
    const allBackupsJSON = localStorage.getItem('space-game-backup')
    return (allBackupsJSON) ? JSON.parse(allBackupsJSON) : []
  }

  public findBackup(date: number)
  {
    let backups = [...this.getBackups()]
    return backups.find((backup) => {
      return backup.date == date
    })
  }

  public restore(backup: any)
  {
    console.log(backup)
  }

  public load(date: number){
    const backup = this.findBackup(date)
    if(backup){
      console.log("backup", backup)
    }
  }

}