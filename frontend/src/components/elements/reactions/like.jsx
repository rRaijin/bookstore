import { useState, useEffect } from "react";

const Like = (props) => {
    const { item } = props;
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        setLikes(item.hasOwnProperty('likes') ? item.likes : 0);
    }, [item]);
    
    return (
        <div className="likes">
            <div>
                {likes}
            </div>
            <button onClick={() => setLikes(likes + 1)}>
                Like
            </button>
        </div>
    )
}

export default Like;


// const Like2 = ({ item, defaultValue }) => {
// console.log('Props: ', item, defaultValue);
// return <div>Nothing</div>
// }