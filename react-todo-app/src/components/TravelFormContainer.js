import React from "react"
import TravelFormComponent from "./TravelFormComponent"

class TravelFormContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegetarian: false,
            isKosher: false,
            isLactoseFree: false
        }

        this.handleFormChange = this.handleFormChange.bind(this)
    }

    handleFormChange(event) {
        const {name, value, type, checked} = event.target

        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({[name]: value})
    }

    render() {
        return (
            <TravelFormComponent handleFormChange={this.handleFormChange} data={this.state}/>
        )
    }
}

export default TravelFormContainer