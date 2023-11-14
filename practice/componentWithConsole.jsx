import { withConsole } from "../frontend/src/hocs/withConsoleLog";
import { withReklamaForUsers } from "../frontend/src/hocs/withMyReklamaForUsers";

const ComponentWithConsole = (props) => {
    console.log('props in comp: ', props)
    return(
        <div className={props.bgColor}>
            x
        </div>
    )
}

export default withConsole(ComponentWithConsole);

// export const ABComponent = withABShow((props) => {
//     console.log('props 2: ', props);

//     return (
//         <div className="">
//             <div>MAIN CONTENT</div>
//             <div>
//                 {props.reklama}
//             </div>
//         </div>
//     )
// });

export const WithmyReklamaComponent = withReklamaForUsers((props) => {
    return (
        <div>
            <div>
                My Reklama
            </div>
            <div>
                {props.myReklama}
            </div>
        </div>
    )
});