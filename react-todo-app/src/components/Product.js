function Product(props){
    return(
        <div>
            <h3 style={{display: !props.product.name && "none"}}>Name: {props.product.name}</h3>
            <p style={{display: !props.product.price && "none"}}>Price: {props.product.price.toLocaleString("en-US", {style: "currency", currency: "CAD"})}</p>
            <p style={{display: !props.product.description && "none"}}>Description: {props.product.description}</p>
            <br />
        </div>
    )
}

export default Product