import { adminEditHOC } from '../../hocs/adminEditHOC';
import Btn from '../../components/elements/buttons/Btn';
import FileField from '../../components/fields/FileField';
import Input from '../../components/fields/Input';
import TextareaField from '../../components/fields/TextareaField';
// import Selector from '../../components/fields/Selector';
import Checkbox from '../../components/fields/Checkbox';



const AdminPublisher = (props) => {
    const {
        items, initialValues, updateInitialValues, setSelectedItem, 
        onStartCreateHandle, formSubmit, keyGenerate,
    } = props;
    
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
                                            {publisher.userId.firstName} {publisher.userId.lastName}
                                        </strong>
                                    </li>
                                )
                            })
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
                                onChangeHandler={updateInitialValues}/>
                            <Input
                                className='text-input admin-author-lastname'
                                fieldName='pseudonym'
                                initialValue={initialValues && initialValues.pseudonym ? initialValues.pseudonym : ''}
                                onChangeHandler={updateInitialValues}/>
                            <Checkbox
                                className=''
                                childClassName=''
                                tempX={'1'}
                                fieldName='isEditorInChief'
                                isChecked={initialValues && initialValues.isEditorInChief ? initialValues.isEditorInChief : false}
                                onCheckHandler={updateInitialValues}
                            />
                        </div>
                        <div className='w-50p'>
                            <TextareaField
                                className='textarea-input admin-bio ml-5'
                                fieldName='bio'
                                initialValue={initialValues ? initialValues.bio : ''}
                                onChangeHandler={updateInitialValues}
                                rows={8}/>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-50p'>
                            <Input
                                className='text-input year-book'
                                fieldName='year'
                                inputType='number'
                                maxValue={10000}
                                initialValue={initialValues ? initialValues.year : ''}
                                onChangeHandler={updateInitialValues}/>
                        </div>
                        <div className='w-50p'>
                            <FileField
                                className=''
                                initialValue={(initialValues && initialValues.picture) ? initialValues.picture : null}
                                fieldName='picture'
                                onFileChoosed={updateInitialValues}
                                folder='publishers'/>
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
            <div  className='empty-block'>
                
            </div>
        </div>
        
    )
}

export default adminEditHOC(
    AdminPublisher,
    'publisher',
    (initialValues) =>
        (initialValues.userId ? initialValues.userId.firstName : true) &&
        (initialValues.userId ? initialValues.userId.lastName : true) &&
        (initialValues.userId ? initialValues.userId.userEmail : true) &&
        initialValues.pseudonym &&
        initialValues.bio &&
        initialValues.year,
    'qwerty'
);
