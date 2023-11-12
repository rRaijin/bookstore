import { useState, useEffect } from "react";

const Dislike = (props) => {
    const { item, defaultValue } = props;
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        setDislikes(item.hasOwnProperty('dislikes') ? item.dislikes : defaultValue ? defaultValue : 0);
    }, [item]);

    return (
        <div className="likes">
            <div>
                {dislikes}
            </div>
            <button onClick={() => setDislikes(dislikes + 1)}>
                Dislike
            </button>
        </div>
    )
}

export default Dislike;
