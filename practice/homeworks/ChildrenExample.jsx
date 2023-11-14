import { Component } from "react";


class Example1 extends Component {
    constructor() {
        super();
        this.state = {
            clickCntLikes: 0,
            clickCntDislikes: 0
        };
        this.handleClickLike = this.handleClickLike.bind(this);
        this.handleClickDisLike = this.handleClickDisLike.bind(this);
    }

    handleClickLike() {
        const { totalCountHandler } = this.props;
        this.setState({clickCntLikes: this.state.clickCntLikes + 1}, () => {
            totalCountHandler(1);
        });
    }

    handleClickDisLike() {
        const { totalCountHandler } = this.props;
        this.setState({clickCntDislikes: this.state.clickCntDislikes + 1});
        totalCountHandler(1);
    }

    render() {
        const { clickCntLikes, clickCntDislikes } = this.state;
        const { item, showBtn } = this.props;
        // console.log('clickCntLikes: ', clickCntLikes);
        // console.log('clickCntDislikes: ', clickCntDislikes);

        return (
            <div>
                <p>{item.name}</p>
                {
                    showBtn &&
                    <div>
                        <button onClick={this.handleClickLike}>
                            Like: {clickCntLikes}
                        </button>
                        <button onClick={this.handleClickDisLike}>
                            Dislike: {clickCntDislikes}
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default Example1;
