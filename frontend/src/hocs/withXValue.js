export const withXValue = (Comp) => {
    function ComponentWithXVal(props) {
        return (
            <Comp {...props} x={1}/>
        )
    }
    return ComponentWithXVal
}