import { Component } from "react";


class MyTodoComponent extends Component {
    constructor() {
        super();
        this.state = {
            inputText: '',
            todos: []
        };
        this.updateInputText = this.updateInputText.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({todos: this.props.items});
    }

    updateInputText(e) {
        const val = e.target.value;
        this.setState({inputText: val});
    }

    handleClick() {
        const { inputText, todos } = this.state;
        this.setState({
            todos: [...todos, inputText],
            inputText: ''
        });
    }

    render() {
        const { inputText, todos } = this.state;

        return (
            <div>
                <nav>
                    {
                        todos.map((todo, i) => {
                            return (
                                <li className="text-red" key={`todo-${i}`}>
                                    {todo}
                                </li>
                            )
                        })
                    }
                </nav>
                <input
                    className=""
                    value={inputText}
                    onChange={this.updateInputText}/>
                <button onClick={this.handleClick}>
                    ADD TODO
                </button>
            </div>
        )
    }
}

export default MyTodoComponent;
