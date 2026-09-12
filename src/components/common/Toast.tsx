interface ToastProps {
    message: string;
    show: boolean;
}

function Toast({
    message,
    show,
}: ToastProps) {
    if (!show) return null;

    return (
        <div className="toast">
            <div className="toast-icon">
                <i className="fa-solid fa-check" />
            </div>

            <span>{message}</span>
        </div>
    );
}

export default Toast;