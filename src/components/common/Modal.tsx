import type { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

function Modal({
    children,
    onClose,
}: ModalProps) {
    return (
        <div
            className="modal"
            onClick={onClose}
        >
            <div
                className="modal-card"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;