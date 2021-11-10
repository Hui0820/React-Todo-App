import React from "react"

class MemeGenerator extends React.Component {
    constructor() {
        super()

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data

                this.setState({ allMemeImgs: memes })
            })
    }

    render() {
        return(
            <div>
                <h1>Meme Generator Section</h1>
            </div>
        )
    }
}

export default MemeGenerator