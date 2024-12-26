import {useState} from 'react'
import Modal from '@/components/UI/Modal.tsx'
import useTaskStore from '@/store/TaskStore';
const SortableItemCreateModal: React.FC = () => {
    const [description, setDescription] = useState('');
    const [due_date, setDueDate] = useState('');
    const {addTask} = useTaskStore();
    const handleSave = () => addTask(description, due_date);
    return (
        <Modal id={`sortable_item_create`}>
            <div className="modal-header">
                <h5 className="modal-title">Create Task</h5>
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
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
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
                value={due_date}
                onChange={(e) =>
                    setDueDate(e.target.value)
                }
                />
            </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                    Cancel
                </button>
                <button type="button" className="btn btn-outline-success" onClick={handleSave}>
                    Save
                </button>
            </div>
        </Modal>
    );
  };
  
  export default SortableItemCreateModal;
  