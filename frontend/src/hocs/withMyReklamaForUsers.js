export const withReklamaForUsers = (Component) => {
    function ComponentWithReklamaForUsers(props) {
        console.log('props in hoc ComponentWithABShow:   ', props);
        let myReklama = 'doll';
        if (props.myuser === 'Svyatoslav') {
            myReklama = 'cars';
        }
        if (props.myuser === 'Roman') {
            myReklama = 'Iphone'
        }

        return (
            <Component {...props} myReklama={myReklama}/>
        )
    }
    return ComponentWithReklamaForUsers;
}