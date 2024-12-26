import {useState} from 'react'
import Modal from '@/components/UI/Modal.tsx'
import useTaskStore from '@/store/TaskStore';
type Props = {
    id: string;
  };
const SortableItemEditModal: React.FC<Props> = ({id}) => {
    const {updateTask, tasks} = useTaskStore();
    const currTask = tasks.find(task => task.id == parseInt(id));
    const [task, setTask] = useState({...currTask})
    const handleSave = () => updateTask(task);
    return (
        <Modal id={`sortable_item_edit_${id}`}>
            <div className="modal-header">
                <h5 className="modal-title">Edit Task</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div className="modal-body">
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                Description
                </label>
                <textarea
                className="form-control"
                id="description"
                value={task.description}
                onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">
                Due Date
                </label>
                <input
                type="date"
                className="form-control"
                id="dueDate"
                value={task.due_date}
                onChange={(e) =>
                    setTask({ ...task, due_date: e.target.value })
                }
                />
            </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Cancel
                </button>
                <button type="button" className="btn btn-success" onClick={handleSave}>
                    Save
                </button>
            </div>
        </Modal>
    );
  };
  
  export default SortableItemEditModal;
  