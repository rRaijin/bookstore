const InputGeneral = (props) => {
    const { value, onChangeHandle, className, inputType = 'number' } = props;
    console.log('props: ', props);

    return (
        <input
            type={inputType}
            className={`inpt ${className === undefined ? '' : className}`}
            value={value}
            onChange={onChangeHandle}
            onSelect={() => console.log('selected')}
            onBlur={() => console.log('data required')}
        />
    );
}

export default InputGeneral;
