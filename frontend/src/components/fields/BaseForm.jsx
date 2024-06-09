const BaseForm = (props) => {
    const { children, data123 } = props;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted', data123);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>BASE FORM RENDER</h4>
            {children}
        </form>
    )
}

export default BaseForm;
