const ButtonGeneral = (props) => {
    const { btnText, onClickHandle, className } = props;
    console.log('props: ', props);

    return (
        <button
            className={`btn ${className === undefined ? '' : className}`}
            onClick={onClickHandle}>
            {btnText}
        </button>
    )
}

export default ButtonGeneral;


// className={className1 + ' ' + className}