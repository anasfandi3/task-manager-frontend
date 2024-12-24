import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export function SortableItem(props: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div className={`border border-1 rounded-1 p-2 ${props.task.completed? 'border-success': 'border-danger'}  mb-2`} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className='d-flex flex-wrap'>
        <div className='w-100'>
          {props.task.description}
        </div>
        <div className='ms-auto'>
          {props.task.due_date}
        </div>
      </div>
    </div>
  );
}