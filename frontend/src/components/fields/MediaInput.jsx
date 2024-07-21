import { useState } from "react";


const MediaInput = (props) => {
    const { isMultiple = false } = props;

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        console.log('e: ', e.target.files[0]);
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (file) {
            console.log('Uploading file...');
        
            const formData = new FormData();
            formData.append('file', file);
        
            try {
                // You can write the URL of your server or any other endpoint used for file upload
                const result = await fetch('https://httpbin.org/post', {
                    method: 'POST',
                    body: formData,
                });
        
                const data = await result.json();
        
                console.log(data);
            } catch (error) {
                console.error(error);
            } finally {
                console.log('data: ', formData)
            }
        }
    };

    return (
        <div className='media-input-container'>
            <div>
                <label htmlFor="file" className="sr-only">
                Choose a file
                </label>
                <input
                    id="file"
                    type="file"
                    multiple={isMultiple} // если нету равно и значения, а только название аттрибута, то по умолчанию он boolean со значением true
                    onChange={handleFileChange} />
            </div>
            {
                file &&
                <section>
                    File details:
                    <ul>
                        <li>Name: {file.name}</li>
                        <li>Type: {file.type}</li>
                        <li>Size: {file.size} bytes</li>
                    </ul>
                </section>
            }

            {
                file &&
                <button onClick={handleUpload}>
                    Upload a file
                </button>
            }
        </div>
    )
}

export default MediaInput;
