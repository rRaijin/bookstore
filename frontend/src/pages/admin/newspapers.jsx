import Input from '../../components/fields/Input';
import TextareaField from '../../components/fields/TextareaField';
import { adminEditHOC } from '../../hocs/adminEditHOC';
import { useEffect, useState } from 'react';
import { fetchData } from '../../utils';
import Dropdown from '../../components/elements/Dropdown';
import Btn from '../../components/elements/buttons/Btn';


const AdminNewspapper = (props) => {
    const {
        items, initialValues, updateInitialValues, onStartCreateHandle, 
        formSubmit, keyGenerate, setSelectedItem, displayText
    } = props;
    const [editorInChief, setEditorInChief] = useState([])
    const [publisher, setPublisher] = useState([])

    useEffect(() => {
        fetchData('publisher', (data) => {
            const transformeredDataPublisher = data.map(publish => ({
                id: publish._id,
                firstName: publish.userId.firstName,
                lastName: publish.userId.lastName
            }))
            setPublisher(transformeredDataPublisher)
        })
    }, []);
    console.log(publisher);

    useEffect(() => {
            fetchData('editorInChief', (data) => {
                const transformeredDataEditorInChief = data.map(editor => ({
                    id: editor._id,
                    firstName: editor.userId.firstName,
                    lastName: editor.userId.lastName
                }))
                setEditorInChief(transformeredDataEditorInChief)
            })
        }, []);
        console.log(editorInChief);

    return (
        <div className='flex admin-cards'>
            <div className='admin-list-wrapper'>
                <div>
                    <ul className='admin-list'>
                        {
                            items.map((newspaper, i) => (
                                <li
                                    className='pointer flex'
                                    key={keyGenerate ? keyGenerate(newspaper, i) : `newspaper-${i}`}
                                    onClick={() => setSelectedItem(newspaper)}>
                                    <strong>
                                        {displayText ? displayText(newspaper) : ''}
                                    </strong>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='admin-form-wrapper'>
                <div className='admin-books-btn-wrapper'>
                    <Btn
                        className='btn-green text-lg uppercase font-base'
                        onClickHandle={onStartCreateHandle}
                        btnText='create'/>
                </div>
                <form className='admin-books-form'>
                    <div className='flex'>
                        <div className='w-50p'>
                            <Input
                                className='text-input admin-author-name'
                                fieldName='newspaperName'
                                initialValue={initialValues ? initialValues.newspaperName : ''}
                                onChangeHandler={updateInitialValues}/>
                            <Input
                                className='text-input year-book'
                                fieldName='year'
                                inputType='number'
                                maxValue={10000}
                                initialValue={initialValues ? initialValues.year : ''}
                                onChangeHandler={updateInitialValues}/>
                            <Dropdown
                                className=""
                                fieldName='editorInChief'
                                items={editorInChief}
                                initialValue={{authorId: { _id: initialValues?.editorInChief || '' }}}
                                onChangeHandler={(id) => updateInitialValues('editorInChief', id)}
                            />
                        </div>
                        <div className='w-50p ml-5'>
                            <TextareaField
                                className='text-input'
                                fieldName='description'
                                initialValue={initialValues ? initialValues.description : ''}
                                onChangeHandler={updateInitialValues}
                                rows={8}/>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-50p'>
                            <Dropdown
                                className=""
                                fieldName='publisher'
                                items={publisher}
                                initialValue={{authorId: { _id: initialValues?.publisher || '' }}}
                                onChangeHandler={(id) => updateInitialValues('publisher', id)}
                            />
                        </div>
                    </div>                   
                    <div>
                        <Btn
                            className='btn-blue text-lg uppercase font-base w-33p float-r'
                            onClickHandle={formSubmit}
                            btnText='save'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

const ComponentX = () => {
    return (
        <div>
            12345
        </div>
    )
}

export default adminEditHOC(
    AdminNewspapper,
    'newspaper',
    (initialValues) =>
        initialValues.newspaperName &&
        initialValues.description &&
        initialValues.year &&
        initialValues.publisher,
    'газет',
    () => <ComponentX>
        <div>ABC</div>
    </ComponentX>
);
