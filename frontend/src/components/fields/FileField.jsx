import { useState, useEffect } from 'react';
import FormData from 'form-data';

import { SERVER_URL } from '../../constants';


const FileField = (props) => {
    const { initialValue, folder, fieldName, onFileChoosed, className, childClassName } = props;
    const [selectedFile, setSelectedFile] = useState(null);
    useEffect(() => {
        if (initialValue) {
            setSelectedFile(SERVER_URL + 'uploads/' + folder + '/' + initialValue);
        }
    }, [initialValue]);

    const uploadFileHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        fetch(`${SERVER_URL}/api/images/file`, {
            method: 'POST',
            body: formData
        }).then(async (response) => {
            if (response.ok === true) {
                const results = await response.json();
                setSelectedFile(SERVER_IMAGE_PATH + results.file);
                onFileChoosed(fieldName, results.file);
            }
        }).catch((e) => {
            console.log('error: ', e);
        });
    }

    // console.log('sel: ', selectedFile);

    return (
        <div className={className}>
            {
                selectedFile &&
                <img src={selectedFile} alt='book-image'/>
            }
            <input
                className={childClassName}
                name='file'
                type='file'
                onChange={uploadFileHandler}/>
        </div>
    )
}

export default FileField;
