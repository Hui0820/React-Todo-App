import React from "react"

class ClickCounting extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickHandle}>Change!</button>
            </div>
        )
    }
}

export default ClickCounting