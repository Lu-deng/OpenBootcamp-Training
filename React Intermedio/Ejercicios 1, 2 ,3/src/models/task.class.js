import { LEVELS } from "./levels.enum"

export class Task{
    name = ""
    description = ""
    completed = false
    levels = LEVELS.NORMAL

  constructor(name, description, completed, levels){
   this.name = name
   this.description = description
   this.completed = completed
   this.levels = levels

 }
}