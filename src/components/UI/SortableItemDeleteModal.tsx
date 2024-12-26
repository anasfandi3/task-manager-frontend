import Modal from '@/components/UI/Modal.tsx'
import useTaskStore from '@/store/TaskStore';
type Props = {
    id: string;
  };
const SortableItemDeleteModal: React.FC<Props> = ({id}) => {
    const {deleteTask} = useTaskStore();
    const handleDelete = () => {
        document.getElementsByClassName('modal-backdrop')[0].remove();
        deleteTask(parseInt(id))
    };
    return (
        <Modal id={`sortable_item_delete_${id}`}>
            <div className="modal-header">
                <h5 className="modal-title">Delete Task</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div className="modal-body">
                Are you sure you want to delete this task?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </Modal>
    );
  };
  
  export default SortableItemDeleteModal;
  