import { Component } from "react";
class SiteHeader extends Component {
    constructor() {
        super()
        this.state = {
            Heart: 'https://e7.pngegg.com/pngimages/725/818/png-clipart-heart-simple-red-people-heart-outline.png'
        }
    }
    HeartClick = () => {
        const newHeart = this.state.Heart === 'https://e7.pngegg.com/pngimages/725/818/png-clipart-heart-simple-red-people-heart-outline.png' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png' : 'https://e7.pngegg.com/pngimages/725/818/png-clipart-heart-simple-red-people-heart-outline.png'
        this.setState({Heart : newHeart});
    }
    render() {
        return(
            <div className="w-100p flex">
                <div className="w-60p flex">
                    <img className="w-8p" src="https://png.pngtree.com/png-vector/20220120/ourlarge/pngtree-bunny-sitting-and-reading-png-image_4340271.png" alt="" />
                    <button className="border-0 back-white" onClick={this.HeartClick}>
                        <div>
                            Понравившееся
                        </div>
                        <img className="w-5p" src={this.state.Heart} alt="" />
                    </button>
                </div>
                <div className="w-40p">
                    <img src="data:image/png;base64,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" alt="" />
                </div>
            </div>
        )
    }
}

export default SiteHeader;
