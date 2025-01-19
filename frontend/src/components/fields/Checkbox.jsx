const Checkbox = (props) => {
    const { className, childClassName, fieldName, isChecked, onCheckHandler, tempX } = props;
    let fieldLabel = '';
    switch (fieldName) {
        case 'isEditorInChief': fieldLabel = 'Editor in chief'; break;
        case 'azaza':           fieldLabel = 'Cat dog table';   break;
    }

    return (
        <div className={className}>
            <input
                type='checkbox'
                className={childClassName}
                name={fieldName} 
                checked={isChecked}
                onChange={() => onCheckHandler(fieldName, !isChecked)}/>          
            <label className=''>
                {fieldLabel}
            </label>
        </div>
    )
}

export default Checkbox;
