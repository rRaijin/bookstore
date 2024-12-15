const Btn = (props) => {
    const { btnText, onClickHandle, className } = props;

    return (
        <button
            className={`btn ${className === undefined ? '' : className}`}
            onClick={onClickHandle}
            type='button'>
            {btnText}
        </button>
    )
}

export default Btn;
