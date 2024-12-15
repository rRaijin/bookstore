import Input from '../../components/fields/Input';
import TextareaField from '../../components/fields/TextareaField';
import { adminEditHOC } from '../../hocs/adminEditHOC';


const AdminEditorInChief = (props) => {
    const {
        items, initialValues, updateInitialValues, onStartCreateHandle, 
        formSubmit, keyGenerate, setSelectedItem, displayText
    } = props;



    // console.log(items)
    return (
        <div className='flex admin-cards'>
            <div className='admin-list-wrapper'>
                <div>
                    <ul className='admin-list'>
                        {
                            items.map((editorInChief, i) => (
                                <li
                                    className='pointer flex'
                                    key={keyGenerate ? keyGenerate(editorInChief, i) : `editorInChief-${i}`}
                                    onClick={() => setSelectedItem(editorInChief)}>
                                    <strong>
                                            {editorInChief.userId.firstName} {editorInChief.userId.lastName}
                                    </strong>
                                </li>
                            ))
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
                        fieldName='firstName'
                        initialValue={initialValues && initialValues.userId ? initialValues.userId.firstName : ''}
                        onChangeHandler={updateInitialValues}/>
                    <Input
                        className='text-input admin-author-lastname'
                        fieldName='lastName'
                        initialValue={initialValues && initialValues.userId ? initialValues.userId.lastName :''}
                        onChangeHandler={updateInitialValues}/>
                    <Input
                        className='text-input admin-author-lastname'
                        fieldName='userEmail'
                        initialValue={initialValues && initialValues.userId ? initialValues.userId.userEmail : ''}
                        onChangeHandler={updateInitialValues}
                    />

                    {/* <Input
                        className='text-input year-book'
                        fieldName='year'
                        inputType='number'
                        maxValue={10000}
                        initialValue={initialValues ? initialValues.year : ''}
                        onChangeHandler={updateInitialValues}/> */}
                    <TextareaField
                        className='textarea-input admin-bio'
                        fieldName='bio'
                        initialValue={initialValues ? initialValues.bio : ''}
                        onChangeHandler={updateInitialValues}
                        rows={8}/>
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

const ComponentX = () => {
    return (
        <div>
            12345
        </div>
    )
}

export default adminEditHOC(
    AdminEditorInChief,
    'editorInChief',
    (initialValues) =>
        initialValues.firstName &&
        initialValues.lastName &&
        initialValues.userEmail &&
        initialValues.bio,
    'редактора',
    () => <ComponentX>
        <div>ABC</div>
    </ComponentX>
);
