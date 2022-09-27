import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toUnicode } from "punycode";
import storage from "../../../firebase/firebaseConfig";
import { Button } from "../../atoms";

interface UploadProps extends React.HTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  disabled?: boolean;
  description: string;
  className?: string;
}

function UploadImage({
  children,
  disabled,
  description,
  className,
}: UploadProps) {
  const [file, setFile] = useState(null);
  const [percent, setPercent] = useState(0);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Por favor seleccione una imagen primero.");
    }

    const storageRef = ref(storage, `/animals/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentLoaded = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percentLoaded);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          //  TODO: get current report id and save url to database
          const requestBody = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ report_id: 1, image_url: url }),
          };
          fetch("http://localhost:3000/reports/image", requestBody)
            .then((response) => response.json())
            .then((data) => console.log(data.response));
        });
      }
    );
  };

  return (
    <>
      <label htmlFor="uploadImage" className="input--label">
        {description}
      </label>
      <div className="upload">
        <input
          id="uploadImage"
          type="file"
          className={`${className}`}
          onChange={handleChange}
          accept="/image/*"
        />
        {/* <button type="submit" onClick={handleUpload}> */}
        <Button onClick={handleUpload} disabled={disabled}>
          {children}
        </Button>
        <p>{percent}% done</p>
      </div>
    </>
  );
}

export default UploadImage;
