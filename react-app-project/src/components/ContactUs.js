function ContactUS() {
    return (
        <>
        <p>Contact Us</p>
        <form>
            <div>
                <span>First Name:</span><input type="text" placeholder="First Name"/><br/>
                <span>Last Name:</span><input type="text" placeholder="Last Name"/><br/>
                <span>Email:</span><input type="text" placeholder="Email Address"/><br/>
                <span>Comments:</span>
                <br/><textarea rows={5} cols={30} placeholder="Comment Here"/><br/>
                <button>Submit</button>
            </div>
        </form>
        </>
    )
}

export default ContactUS;