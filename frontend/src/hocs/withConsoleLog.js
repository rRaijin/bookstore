export const withConsole = (Comp) => {
    function ComponentWithConsoleLog(props) {
        console.log('props in hoc ComponentWithConsoleLog:   ', props);
        let bgColor = 'text-red';
        if (props.position % 2 === 0) {
            bgColor = 'text-blue';
        }

        return (
            <Comp {...props} bgColor={bgColor}/>
        )
    }
    return ComponentWithConsoleLog;
}