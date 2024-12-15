import { useState, useEffect } from 'react';
import FormData from 'form-data';

import { getFilePath } from '../../utils';
import { SERVER_URL } from '../../constants';


// 1. сделать универсальнім: фльт должен меняться, класснейм настраиваемій


const FileField = (props) => {
    const { initialValue, folder, fieldName, onFileChoosed, className, childClassName } = props;
    const [selectedFilePath, setSelectedFilePath] = useState(null);
    const [dropped, setDrop] = useState(false);

    useEffect(() => {
        if (initialValue && !dropped) {
            const filePath = getFilePath(folder, initialValue);
            setSelectedFilePath(filePath);
        } else if (dropped) {
            const filePath = getFilePath(folder, initialValue, true);
            setSelectedFilePath(filePath);
        } else {
            setSelectedFilePath(null);
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
                setDrop(true);
                setSelectedFilePath(filePath);
                onFileChoosed(fieldName, results.file);
            }
        }).catch((e) => {
            console.log('error: ', e);
        });
    }

    return (
        <div className={className}>
            {
                selectedFilePath ?
                <img style={{width: '100%', height: '300px', overflowY: 'hidden'}} src={selectedFilePath} alt='book-image'/> :
                <img src='https://placehold.co/400' alt='book-image' style={{width: '100%', height: '300px'}}/>
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
