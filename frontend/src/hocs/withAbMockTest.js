export const withABShow = (Component) => {
    function ComponentWithABShow(props) {
        console.log('props in hoc ComponentWithABShow:   ', props);
        let reklama = 'computers';
        if (props.user === 'petya') {
            reklama = 'notebooks';
        }

        return (
            <Component {...props} reklama={reklama}/>
        )
    }
    return ComponentWithABShow;
}
