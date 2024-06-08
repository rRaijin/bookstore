const InputGeneral = (props) => {
    const { value, onChangeHandle, className } = props;
    console.log('props: ', props);

    return (
        <input
            type="number"
            className={`inpt ${className === undefined ? '' : className}`}
            value={value}
            onChange={onChangeHandle}
        />
    );
}

export default InputGeneral;
