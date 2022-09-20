import React from 'react'
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskCompoment from '../../pure/task';

const TasklistComponent = (props) => {
  
  const defaultTask = new Task("Example", "yesss", false, LEVELS.NORMAL)
    
    return (
    <div>
        <div>
          Your task:
        </div>
        {/* Aplicar map o for para renderizar una lista    */}
     <TaskCompoment task={ defaultTask }></TaskCompoment>
    </div>
  )
};


export default TasklistComponent;
