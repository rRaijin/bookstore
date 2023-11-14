import { Component } from "react";

import ChildrenExample from './ChildrenExample';


class ParentCbExample extends Component {
    constructor() {
        super();
        this.state = {
            totalClicks: 0,
            showChildrenBtns: true
        };
        this.totalCountHandler = this.totalCountHandler.bind(this);
    }

    static getDerivedStateFromProps(prevProps, prevState) { // статический метод
        console.log('prevProps: ', prevProps);
        console.log('prevState: ', prevState);

        if (prevState.totalClicks > 5) {
            return { // работает примерно как this.setState()
                ...prevState,
                showChildrenBtns: false
            }
        }
        // if (prevProps.x === 5) {
        //     alert('aaaaaaaaaaaa')
        // }
        return prevState
    }

    // Things to do before unloading/closing the tab
    doSomethingBeforeUnload = () => {
        // Do something
    }

    // Setup the `beforeunload` event listener
    setupBeforeUnloadListener = () => {
        window.addEventListener("beforeunload", (ev) => {
            ev.preventDefault();
            return this.doSomethingBeforeUnload();
        });
    };

    componentDidMount() {
        // Activate the event listener
        this.setupBeforeUnloadListener();
    }

    componentWillUnmount() {
        
    }

    totalCountHandler(dataFromChildren) {
        console.log('st: ', this.state.totalClicks) // 0
        this.setState({totalClicks: this.state.totalClicks + dataFromChildren}, () => {
            // console.log('st2: ', this.state.totalClicks) // 1
            // if (this.state.totalClicks > 5) {
            //     this.setState({
            //         showChildrenBtns: false
            //     })
            // }
        });
    }

    render() {
        const items = [{name: 'korova', b: 2}, {name: 'koza', b: 4}];
        const { totalClicks, showChildrenBtns } = this.state;

        console.log('showChildrenBtns: ', showChildrenBtns);

        return(
            <div style={{border: '1px solid black', padding: '5px', margin: '10px 0'}}>
                <div>
                    Total clicks: {totalClicks}
                </div>
                {
                    items.map((el, j) => {
                        return (
                            <ChildrenExample
                                key={`animal_${j}`}
                                item={el}
                                showBtn={showChildrenBtns}
                                totalCountHandler={this.totalCountHandler}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default ParentCbExample;
