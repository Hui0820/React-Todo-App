import React from "react"

class TravelForm extends React.Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            age: null,
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

        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render() {
        return (
            <main>
                <h1>Travel Form</h1>
                <form>
                    <input
                      type="text"
                      name="firstName"
                      value={this.state.firstName}
                      placeholder="First Name"
                      onChange={this.handleFormChange}
                    /><br />
                    <input
                      type="text"
                      name="lastName"
                      value={this.state.lastName}
                      placeholder="Last Name"
                      onChange={this.handleFormChange}
                    /><br />
                    <input
                      type="number"
                      name="age"
                      value={this.state.age}
                      placeholder="Age"
                      onChange={this.handleFormChange}
                    /><br />
                    <h4>Gender: </h4>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleFormChange}
                      />
                      <label>Male</label>
                      &nbsp;&nbsp;&nbsp;
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleFormChange}
                      />
                      <label>Female</label>
                      <br />
                      <h4>Destination: </h4>
                      <select name="destination" value={this.state.destination} onChange={this.handleFormChange}>
                          <option value="">Please select...</option>
                          <option value="Toronto">Toronto</option>
                          <option value="Montreal">Montreal</option>
                          <option value="Ottawa">Ottawa</option>
                      </select>
                      <h4>Dietary restrictions: </h4>
                      <input
                        type="checkbox"
                        name="isVegetarian"
                        checked={this.state.isVegetarian}
                        onChange={this.handleFormChange}
                      /><label>Vegetarian</label>
                      <input
                        type="checkbox"
                        name="isKosher"
                        checked={this.state.isKosher}
                        onChange={this.handleFormChange}
                      /><label>Kosher</label>
                      <input
                        type="checkbox"
                        name="isLactoseFree"
                        checked={this.state.LactoseFree}
                        onChange={this.handleFormChange}
                      /><label>Lactose Free</label>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions:
                    {this.state.isVegetarian ? "Vegetarian" : null}, {this.state.isKosher ? "Kosher" : null}, {this.state.isLactoseFree ? "Lactose Free" : null}
                </p>
            </main>
        )
    }
}

export default TravelForm