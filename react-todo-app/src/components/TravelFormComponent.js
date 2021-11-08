import React from "react"

function TravelFormComponent(props) {
    return(
        <main>
                <h1>Travel Form</h1>
                <form>
                    <input
                      name="firstName"
                      value={props.firstName}
                      placeholder="First Name"
                      onChange={props.handleFormChange}
                    /><br />

                    <input
                      name="lastName"
                      value={props.lastName}
                      placeholder="Last Name"
                      onChange={props.handleFormChange}
                    /><br />

                    <input
                      name="age"
                      value={props.age}
                      placeholder="Age"
                      onChange={props.handleFormChange}
                    /><br />

                    <h4>Gender: </h4>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={props.data.gender === "male"}
                          onChange={props.handleFormChange}
                        /> Male
                      </label>
                      <br />

                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={props.data.gender === "female"}
                          onChange={props.handleFormChange}
                        /> Female
                      </label>
                      <br />

                      <h4>Destination: </h4>
                      <select name="destination" value={props.data.destination} onChange={props.handleFormChange}>
                          <option value="">--Please select a destination--</option>
                          <option value="toronto">Toronto</option>
                          <option value="montreal">Montreal</option>
                          <option value="ottawa">Ottawa</option>
                      </select>

                      <h4>Dietary restrictions: </h4>
                      <label>
                        <input
                          type="checkbox"
                          name="isVegetarian"
                          checked={props.data.isVegetarian}
                          onChange={props.handleFormChange}
                        /> Vegetarian?
                      </label>
                      <br />
                      <label>
                        <input
                          type="checkbox"
                          name="isKosher"
                          checked={props.data.isKosher}
                          onChange={props.handleFormChange}
                        /> Kosher?
                      </label>
                      <br />
                      <label>
                        <input
                          type="checkbox"
                          name="isLactoseFree"
                          checked={props.data.isLactoseFree}
                          onChange={props.handleFormChange}
                        /> Lactose Free?
                      </label>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination}</p>
                <p>
                    Your dietary restrictions:
                    {props.data.isVegetarian ? "Vegetarian" : null}, {props.data.isKosher ? "Kosher" : null}, {props.data.isLactoseFree ? "Lactose Free" : null}
                </p>
            </main>
    )
}

export default TravelFormComponent