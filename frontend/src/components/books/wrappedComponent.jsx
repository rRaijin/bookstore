import { withXValue } from "../../hocs/withXValue";

const MyWrappedComponent = (props) => {
    console.log('props children wrapped component: ', props);
    return (
        <div>TEST</div>
    )
}

export default withXValue(MyWrappedComponent);
// export default MyWrappedComponent;
