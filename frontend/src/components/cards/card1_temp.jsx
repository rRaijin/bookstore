const Card1 = (props) => {
    const { title, description, index } = props;
    let [clicked, setClicked] = useState(0); // локальное состояние каждого элемента 
    const clickHandler = () => {
      console.log('cl: ', clicked)
      setClicked(clicked+1);
    }
  
    console.log('clicked:', clicked);
    return (
      <div key={`book-${index}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Clicked: {clicked}</p>
        <button onClick={clickHandler}>
          CLICK
        </button>
      </div>
    )
}

export default Card1;
