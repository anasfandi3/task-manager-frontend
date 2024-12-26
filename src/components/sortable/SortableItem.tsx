import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import useTaskStore from '@/store/TaskStore';
import SortableItemEditModal from '@/components/UI/SortableItemEditModal.tsx'
import SortableItemDeleteModal from '@/components/UI/SortableItemDeleteModal.tsx'

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
  const {isEditMode, updateTask} = useTaskStore();

  return (
    <div
      ref={setNodeRef}
      style={style}
      className='d-flex flex-column border-0 rounded p-3 mb-2 bg-dark'
    >
      <div className={`d-flex justify-content-between align-items-center ${props.task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
        <div>
          <h5 className="mb-1">{props.task.title}</h5>
          <p className="mb-1 text-secondary">{props.task.description}</p>
          <small className="text-muted">Due: {props.task.due_date}</small>
        </div>
        <div className='d-flex'>
          <div className="form-check me-2">
            <input
              type="checkbox"
              className="form-check-input"
              id={`task-done-${props.id}`}
              checked={props.task.completed}
              onChange={() => updateTask({...props.task, completed: !props.task.completed})}
            />
          </div>
          <div>
              <span data-bs-toggle="modal" data-bs-target={`#sortable_item_delete_${props.task.id}`} className='cursor-pointer hover-light'>
                <i className="fa-solid fa-trash fs-6 text-danger"></i>
              </span>
          </div>
        </div>
      </div>

      {isEditMode && (
        <div className="d-flex justify-content-between align-items-center mt-2 border-top pt-1">
          <span
              {...attributes}
              {...listeners}
              className="drag-handle"
              style={{ cursor: 'grab', fontSize: '1.5em' }}
            >
              <i className="fa-solid fa-grip fs-6"></i>
          </span>

          <button data-bs-toggle="modal" data-bs-target={`#sortable_item_edit_${props.task.id}`} className="btn btn-sm btn-outline-primary">
            <i className="fa-solid fa-pen-to-square me-1"></i> Edit</button>
        </div>
      )}
      <SortableItemEditModal id={props.task.id} />
      <SortableItemDeleteModal id={props.task.id} />
    </div>
  );
}