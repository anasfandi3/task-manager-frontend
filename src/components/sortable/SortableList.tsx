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
import SortableItemCreateModal from '../UI/SortableItemCreateModal';

const SortableList: React.FC = () => {
  // const [tasks, setTasks] = useRecoilState(userTasksState);
  const {tasks, setTasks, isEditMode, setEditMode, saveOrder} = useTaskStore();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const sortableItems = tasks.map((task: any) => task.id);
  
  return (
    <div className="card border-0 bg-dark-subtle">
      <div className="card-body">
        <div className='d-flex mb-3 align-items-center'>
          <div>
            <button data-bs-toggle="modal" data-bs-target='#sortable_item_create' className='btn btn-outline-success btn-sm'>
              <i className="fa-solid fs-6 fa-plus me-1"></i>
              New
            </button>
          </div>
          <div className='ms-auto'>
            <span className='cursor-pointer'>
              {isEditMode? 
              <div>
                <button onClick={() => saveOrder(tasks.map(task => task.id))} className='btn btn-outline-primary btn-sm me-2'>
                <i className="fa-solid fa-check fs-6 me-2"></i>
                   Save order </button>
                <button className='btn btn-sm btn-outline-danger' onClick={() => setEditMode(false)}>
                  <i className="fa-solid fs-6 fa-x"></i>
                </button>
              </div>
              : 
              <button onClick={() => setEditMode(true) } className='btn btn-outline-warning btn-sm'>
                <i className="fa-solid fs-6 fa-pen-to-square"></i>
              </button>
              }
            </span>
          </div>
        </div>
        <DndContext 
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext 
            items={sortableItems}
            strategy={verticalListSortingStrategy}
          >
            {tasks.length > 0 ? tasks.map((task: any) => <SortableItem task={task} key={task.id} id={task.id} />): 'There are no tasks!'}
          </SortableContext>
        </DndContext>
      </div>
      <SortableItemCreateModal />
    </div>
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