import React from 'react';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import useTaskStore from '@/store/TaskStore';
import {SortableItem} from '@/components/sortable/SortableItem';

const SortableList: React.FC = () => {
  // const [tasks, setTasks] = useRecoilState(userTasksState);
  const {tasks, setTasks} = useTaskStore();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const sortableItems = tasks.map((task: any) => task.id);
  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext 
        items={sortableItems}
        strategy={verticalListSortingStrategy}
      >
        {tasks.map((task: any) => <SortableItem task={task} key={task.id} id={task.id} />)}
      </SortableContext>
    </DndContext>
  );
  
  function handleDragEnd(event: any) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      const oldIndex = sortableItems.indexOf(active.id);
        const newIndex = sortableItems.indexOf(over.id);
        const newTasks = [...tasks];
        const taskActive = newTasks.find((task: any) => task.id === active.id);

        if (taskActive && oldIndex !== newIndex) {
          const updatedTaskActive = { ...taskActive, order: newIndex+1 };

          newTasks.splice(oldIndex, 1, updatedTaskActive);
        }
      setTasks(arrayMove(newTasks, oldIndex, newIndex));
    }
  }
};

export default SortableList;