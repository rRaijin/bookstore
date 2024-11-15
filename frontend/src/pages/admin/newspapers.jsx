import Input from '../../components/fields/Input';
import TextareaField from '../../components/fields/TextareaField';
import { adminEditHOC } from '../../hocs/adminEditHOC';


const AdminNewspapper = (props) => {
    const { items, 
            initialValues, 
            updateInitialValues, 
            onStartCreateHandle, 
            formSubmit, 
            displayText,
            keyGenerate,
            dontclickDisplayText } = props;

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
                                    onClick={() => dontclickDisplayText(newspaper)}
                                >
                                    <div>
                                        <strong >
                                            {displayText ? displayText(newspaper) : ''}
                                        </strong>
                                    </div>
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
                        fieldName='newspaperName'
                        initialValue={initialValues ? initialValues.newspaperName : ''}
                        onChangeHandler={updateInitialValues}/>
                    <Input
                        className='text-input admin-author-lastname'
                        fieldName='description'
                        initialValue={initialValues ? initialValues.description : ''}
                        onChangeHandler={updateInitialValues}/>
                    <Input
                        className='text-input year-book'
                        fieldName='year'
                        inputType='number'
                        maxValue={10000}
                        initialValue={initialValues ? initialValues.year : ''}
                        onChangeHandler={updateInitialValues}/>
                    <TextareaField
                        className='textarea-input admin-bio'
                        fieldName='publisher'
                        initialValue={initialValues ? initialValues.publisher : ''}
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




export default adminEditHOC(
    AdminNewspapper,
    'newspaper',
    (initialValues) =>
        initialValues.newspaperName &&
        initialValues.description &&
        initialValues.year &&
        initialValues.publisher,
    'газет',
);
