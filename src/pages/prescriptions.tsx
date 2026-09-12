import { useState } from "react";

interface Prescription {
    id: number;
    name: string;
    size: string;
    type: "pdf" | "image";
}

function Prescriptions() {
    const [files, setFiles] = useState<
        Prescription[]
    >([
        {
            id: 1,
            name: "General Checkup.pdf",
            size: "2.4 MB · 08 Sep 2026",
            type: "pdf",
        },
        {
            id: 2,
            name: "Blood Test.png",
            size: "1.8 MB · 22 Aug 2026",
            type: "image",
        },
    ]);

    const handleUpload = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFile = event.target.files?.[0];

        if (!selectedFile) return;

        const newFile: Prescription = {
            id: Date.now(),
            name: selectedFile.name,
            size: `${(
                selectedFile.size /
                1024 /
                1024
            ).toFixed(2)} MB · Today`,
            type:
                selectedFile.type === "application/pdf"
                    ? "pdf"
                    : "image",
        };

        setFiles((previous) => [
            ...previous,
            newFile,
        ]);
    };

    return (
        <>
            <div className="section-top">
                <div>
                    <span className="panel-label">
                        DOCUMENTS
                    </span>

                    <h1>Prescriptions</h1>

                    <p>
                        Keep your prescriptions organized in one
                        place.
                    </p>
                </div>

                <label className="primary-btn upload-btn">
                    <i className="fa-solid fa-cloud-arrow-up" />
                    Upload Prescription

                    <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        hidden
                        onChange={handleUpload}
                    />
                </label>
            </div>

            <div className="document-grid">
                {files.map((file) => (
                    <div
                        className="document-card"
                        key={file.id}
                    >
                        <div
                            className={`document-icon ${file.type}`}
                        >
                            <i
                                className={
                                    file.type === "pdf"
                                        ? "fa-solid fa-file-pdf"
                                        : "fa-solid fa-file-image"
                                }
                            />
                        </div>

                        <div className="document-info">
                            <strong>{file.name}</strong>
                            <span>{file.size}</span>
                        </div>

                        <button className="more-btn">
                            <i className="fa-solid fa-ellipsis" />
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Prescriptions;