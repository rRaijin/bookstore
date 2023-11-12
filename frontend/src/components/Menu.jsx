import { useState, Fragment } from 'react';

const Menu = (props) => {
    const { items, color, gh } = props;
    // console.log('props: ', props);
    // console.log('color: ', color);
    // console.log('gh: ', gh);

    let [cntClicked, setCntClicked] = useState(0);

    const handleClickCnt = (data) => {
        console.log('click', data)
        setCntClicked(cntClicked++);
    }

    return (
        <Fragment>
        <ul className=''>
            {
                items.map((item, i) => {
                    return (
                    <li className='' key={`top-menu-item-${i}`} onClick={() => handleClickCnt(234)}>
                        {item.value} <span>Position: {item.postiton}</span> | <span>Index: {i}</span>
                    </li>
                )
            })
            }
        </ul>
        {/* <p>TOTAL CLICK: {cntClicked}</p> */}
        </Fragment>
    )
}

export const MyComponent = () => <div>My div 11111111111111111111111</div>

export const menuVar = 42;

const myVar2 = 'abc';

export default Menu;
