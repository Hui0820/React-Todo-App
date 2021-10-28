import React from "react"

function Conditional(props) {
    return (
        props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>
    )
}

export default Conditional