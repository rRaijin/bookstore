import { adminEditHOC } from '../../hocs/adminEditHOC';
import FileField from '../../components/fields/FileField';
import Input from '../../components/fields/Input';
import TextareaField from '../../components/fields/TextareaField';
import { useEffect, useState } from 'react';
import { fetchData } from '../../utils';
import Dropdown from '../../components/elements/Dropdown';

const AdminPublisher = (props) => {
    const {
        items, initialValues, updateInitialValues, setSelectedItem, 
        onStartCreateHandle, formSubmit, displayText, keyGenerate,
    } = props;
    const [editorInChief, setEditorInChief] = useState([])
    
    useEffect(() => {
        fetchData('editorInChief', (data) => {
            const transformeredData = data.map(editor => ({
                id: editor._id,
                firstName: editor.userId.firstName,
                lastName: editor.userId.lastName
            }))
            setEditorInChief(transformeredData)
        })
    }, []);
    console.log(editorInChief);

    return (
        <div className='flex admin-cards'>
            <div className='admin-list-wrapper'>
                <div>
                    <ul className='admin-list'>
                        {
                            items.map((publisher, i) => {
                                return (
                                    <li
                                        className='pointer flex'
                                        key={keyGenerate ? keyGenerate(publisher, i) : `publisher-${i}`}
                                        onClick={() => setSelectedItem(publisher)}>
                                        <strong>
                                            {displayText ? displayText(publisher) : ''}
                                        </strong>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='admin-form-wrapper'>
                <div>
                    <button className='create-buttom' onClick={onStartCreateHandle}>
                        CREATE
                    </button>
                </div>
                <form className='admin-books-form'>
                    <Input
                        className='text-input admin-author-name'
                        fieldName='publisherName'
                        initialValue={initialValues ? initialValues.publisherName : ''}
                        onChangeHandler={updateInitialValues}/>
                    <Dropdown
                        className=""
                        fieldName='editorInChief'
                        items={editorInChief}
                        initialValue={{authorId: { _id: initialValues?.editorInChief || '' }}}
                        onChangeHandler={(id) => updateInitialValues('editorInChief', id)}
                    />

                    <Input
                        className='text-input year-book'
                        fieldName='year'
                        inputType='number'
                        maxValue={10000}
                        initialValue={initialValues ? initialValues.year : ''}
                        onChangeHandler={updateInitialValues}/>
                    <TextareaField
                        className='textarea-input admin-bio'
                        fieldName='description'
                        initialValue={initialValues ? initialValues.description : ''}
                        onChangeHandler={updateInitialValues}
                        rows={8}/>
                    <FileField
                        className=''
                        initialValue={(initialValues && initialValues.picture) ? initialValues.picture : null}
                        fieldName='picture'
                        onFileChoosed={updateInitialValues}
                        folder='publishers'/>
                    <button
                        type='button'
                        className='save-button'
                        onClick={formSubmit}>
                        SAVE
                    </button>
                </form>
            </div>
            <div  className='empty-block'>
                
            </div>
        </div>
        
    )
}

export default adminEditHOC(
    AdminPublisher,
    'publisher',
    (initialValues) =>
        initialValues.publisherName &&
        initialValues.description &&
        initialValues.year &&
        initialValues.editorInChief,
    'qwerty'
);
