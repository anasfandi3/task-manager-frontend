type Props = {
  children?: React.ReactNode;
  id: string
};
const Modal: React.FC<Props> = ({children, id}) => {
  return (
    <div className="modal fade" id={id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                {children}
            </div>
        </div>
    </div>
  );
};

export default Modal;
