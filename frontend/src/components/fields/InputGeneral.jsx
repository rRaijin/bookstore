const InputGeneral = (props) => {
    const { value, onChangeHandle, className = '' } = props;
    console.log('props: ', props);

    return (
        <input
            type="number"
            className={`input1 ${className}`}
            value={value}
            onChange={onChangeHandle}
        />
    );
}

export default InputGeneral;
