import { Component } from "react";
import MyComponentSome3 from "../homeworks/Some3";
import AnimalInfo99, {myConst} from "../books/AnimalInfo";
// import AnimalData from "./Animal-Data";
import MainPageHead123 from "../MainPageHead";
import { useState } from 'react';
import MyInputComponent from "../books/MyInputComponent";
import PlantInfo from '../homeworks/PlantInfo';
import SizeChanges from "../books/FontSizeComponent";
import TextAdd from "../books/InputText";
import MyTodoComponent from '../books/MyTodoComponent';
import AnyTextComponent from "../books/Any-text";
import ParentCbExample from '../books/ParentCbExample';
import ParentInputComponent from "../books/ParentInput";
import ParentBread from "../books/ParentBreadInput";


// const [myInputName, setMyInputName] = useState('');

// state через чистую ф-ю
// const [position, ] = useState(1);

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            position: 1,
            a: 0,
            Heart: 'https://e7.pngegg.com/pngimages/725/818/png-clipart-heart-simple-red-people-heart-outline.png',
            fontSize: 20,
            textareaValue: '',
            inputValue: '',
            cleaner: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1650465772/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/lmcode/MAw4AUzA20KZ6S5yfbTdFg/84347455.jpg'
        }
        this.some1 = this.some1.bind(this);
        this.changeFontSizeHandler = this.changeFontSizeHandler.bind(this);
        const x = 45;
    }

// class MyComponentHeart extends Component {
//     constructor() {
//         super();
//         this.state = {
//             Heart: 'https://e7.pngegg.com/pngimages/725/818/png-clipart-heart-simple-red-people-heart-outline.png'
//         }
//     }
// }



    // UNSAFE_componentWillMount() {
    //     console.log('Я собираюсь появиться!-1')
    // }

    componentDidMount() {
        // console.log('Я появился!!!');
        const c = 3;
        setInterval(() => {
            if (this.state.position < 6) {
                this.setState({position: this.state.position + 1})
            } else {
                this.setState({position: 1})
            }
        }, 8000);
    }

    some1() {
        const a = 1;
        console.log('st: ', this)
    }

    some2() {
        console.log('st: ', this)
    }

    // если бы был фугкциональный компонент
    // const [position, setPosition] = useState(1);

    sx = () => {
        console.log('aaa')
    }

    handleClick = () => {
        this.setState({
            a: 2
        })
    }

    HeartClick = () => {
        const newHeart = this.state.Heart === 'https://e7.pngegg.com/pngimages/725/818/png-clipart-heart-simple-red-people-heart-outline.png' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png' : 'https://e7.pngegg.com/pngimages/725/818/png-clipart-heart-simple-red-people-heart-outline.png'
        this.setState({Heart : newHeart});
    }

    changeFontSizeHandler() {
        this.setState({fontSize: 30})
    }

    changeFontSizeHandlerReverse() {
        this.setState({fontSize: 20})
    }

    changeTextareaValueHandler = (e) => {
        const val = e.target.value;
        console.log('val: ', val);
        this.setState({textareaValue: val});
    }

    // единственный обязательный метод - render
    render() {
        // домашняя работа 1
        const animals = [
            {kind: 'cat', name: 'klyaksa', age: 1},
            {
                kind: 'Dog',
                name: 'Persik',
                age: 2
            }
        ];

        // домашняя работа 2.1 Мапнуть массив из двух объектов, на каждой итерации вернуть собственный компонент
        const plants = [{kind: "tree", name: "elka", height: 3}, {kind: "flower", name: "romashka", height: 0.2}]
        // домашняя работа 2.2 Написать <input>, просто менящий значение в state и выводящий его console.log, хэндлер не на чистой функции

        return (
            <div className={`container self-slider`}>
                {/* <p className={`font-20`} onMouseEnter={this.changeFontSizeHandler}>Some text for example</p> */}
                <p
                    className={`font-${this.state.fontSize}`} // Динамический параметр из стейта
                    onMouseEnter={this.changeFontSizeHandler}
                    onMouseLeave={this.changeFontSizeHandlerReverse.bind(this)}>
                    Some text for example
                </p>

                {/* homework task 1 */}
                {
                    plants.map((item, i) => {
                        return (
                            <PlantInfo item={item} key={`plant-${i}`}/>
                        )
                    })
                }

                {/* homework task 2 */}
                <textarea onChange={this.changeTextareaValueHandler} value={this.state.textareaValue}></textarea>
                {
                    this.state.textareaValue === 'Пылесос' &&
                    <img className="w-10p" src={this.state.cleaner} alt="" />
                }
                {
                    this.state.textareaValue === 'Чашка' &&
                    <img className="w-10p" src='https://printerio.com.ua/image/cache/data/cup/1000%D1%851000/print_2-1000x1000.jpg' alt="" />
                }
                {
                    animals.map((animalItem, i) => {
                        return (
                            <AnimalInfo99 animal={animalItem} key={`animal-${i}`}/>
                        )
                    })
                }

                {/* Написать классовій компонент, которій ничего не принимает, но по нажатию на него, меняет размер текста */}
                <SizeChanges/>s


                {/* Написать компонент, который будет добавлять дела */}
                <div>
                    <ul>
                        <li>Почистить зубы</li>
                        <li>Умыться</li>
                        <li>Позавтракать</li>
                        <li>Пойти в школу</li>
                    </ul>
                    <TextAdd/>
                    <button></button>
                </div>

                <MyTodoComponent items={['Почистить зубы', 'Умыться', 'Позавтракать', 'Пойти в школу']}/>

                <ParentCbExample/>

                {/* Отрисовівает массив обїектов, и может добавлять новій обїект по двум вводимім полям */}
                {/* const items = [
                    {color: 'red', size: 23},
                    {color: 'blue', size: 30},
                ] */}
                {/* <div>
                    <ul>
                        <li>
                            <p>Color: {item.color}</p>
                            <p>Size: {item.size}</p>
                        </li>
                    </ul>
                    <label>Введите цвет</label>
                    <input type="text" />
                    <label>Введите размер</label>
                    <input type="text" />
                    <button>Добавить</button>
                </div> */}
                <h4>HOMEWORK</h4>
                <AnyTextComponent/>
                <ParentInputComponent/>
                <div>
                    Напишите хлеб
                    <ParentBread/>

                </div>
                <div>
                    <button className="border-0 back-white " onClick={this.HeartClick}>
                        изменить
                        <img className="w-2p" src={this.state.Heart} alt="" />
                    </button>
                </div>

                <MyInputComponent/>
            </div>
        )
    }
}

const Sx = ({pos}) => <img src={`/slides/slide_${pos}.jpg`} alt="" />

export default MyComponent;
