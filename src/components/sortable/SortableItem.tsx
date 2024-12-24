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
    <div className='border border-1 rounded-1 p-2 border-success mb-2' ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {JSON.stringify(props.id)}
    </div>
  );
}