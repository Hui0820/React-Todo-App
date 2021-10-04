function ContactCard(props) {
    return(
        <div className="contact-card">
            <img src={props.contacts.imgUrl} />
            <h3>{props.contacts.name}</h3>
            <p>Phone: {props.contacts.phone}</p>
            <p>Email: {props.contacts.email}</p>
        </div>
    )
}

export default ContactCard;