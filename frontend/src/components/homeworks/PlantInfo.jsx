import { Component } from "react";


class PlantInfo extends Component {
    constructor() {
        super();
        this.state = {
            css: 'text-turquoise'
        };
        this.changeColorTitle = this.changeColorTitle.bind(this);
    }

    changeColorTitle() {
        this.setState({
            css: this.state.css === 'text-turquoise' ? 'text-light-pink' : 'text-turquoise'
        });
    }

    render() {
        const { item } = this.props;
        const { css } = this.state;

        return (
            <div>
                <h1 className={css}>{item.name}</h1>
                <p>{item.kind}</p>
                {/* кнопка по нажатию меняет цвет заголовка h1 на любой другой и при повторном длеает это обратно */}
                <button onClick={this.changeColorTitle}>
                    Change color
                </button>
            </div>
        )
    }
}

export default PlantInfo;
