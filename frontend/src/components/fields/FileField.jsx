import { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';


const FileField = (props) => {
    const { className, childClassName, btnClassName } = props;
    const [selectedFile, setSelectedFile] = useState(null);

    const fileSelectedHandler = (event) => {
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0]);
    }

    const uploadFileHandler = async (event) => {
        event.preventDefault()

        const formData = new FormData();
        formData.append("file", selectedFile)
        formData.append("description", 'aaa')
        console.log('fd: ', formData);
        // AXIOS example
        // const result = await axios.post(
        //     'http://localhost:3001/api/images', 
        //     formData, 
        //     { headers: {'Content-Type': 'multipart/form-data'} }
        // );

        fetch('http://localhost:3001/api/images', {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            body: formData
        }).then(async (response) => {
            if (response.ok === true) {
                
            }
        }).catch((e) => {
            console.log('error: ', e);
        });
    }

    return (
        <div className={className}>
            <input
                className={childClassName}
                name='file'
                type='file'
                onChange={fileSelectedHandler}/>
            <button
                className={btnClassName}
                onClick={uploadFileHandler}>
                Upload
            </button>
        </div>
    )
}

export default FileField;
