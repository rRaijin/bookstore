import { useState, useEffect } from 'react';
import FormData from 'form-data';

import { getFilePath } from '../../utils';
import { SERVER_URL } from '../../constants';


const FileField = (props) => {
    const { initialValue, folder, fieldName, onFileChoosed, className, childClassName } = props;
    const [selectedFilePath, setSelectedFilePath] = useState(null);

    useEffect(() => {
        if (initialValue) {
            const filePath = getFilePath(folder, initialValue);
            setSelectedFilePath(filePath);
        }
    }, [initialValue]);

    const uploadFileHandler = async (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        fetch(`${SERVER_URL}/api/images/file`, {
            method: 'POST',
            body: formData
        }).then(async (response) => {
            if (response.ok === true) {
                const results = await response.json();
                const filePath = getFilePath(folder, results.file, true);
                setSelectedFilePath(filePath);
                onFileChoosed(fieldName, results.file);
            }
        }).catch((e) => {
            console.log('error: ', e);
        });
    }

    // console.log('sel: ', selectedFilePath);

    return (
        <div className={className}>
            {
                selectedFilePath &&
                <img src={selectedFilePath} alt='book-image'/>
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
