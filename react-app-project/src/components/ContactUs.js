import {useEffect, useRef} from "react"
function ContactUS() {
  
  
    const outputDiv = useRef("");
    const txtfirstname = useRef("");
    const txtlastname = useRef("");
    const txtemail = useRef("");
    const txtphone = useRef("");
    const txtcomment = useRef("");
  
const btnSubmitForm = (event)=>
        {
            let _msg = "";
    
            event.preventDefault();
    
            outputDiv.current.innerText = _msg
            console.log(_msg)
    
            if(txtfirstname.current.value == null | txtfirstname.current.value.trim().length == 0) {
              _msg = "## please enter a valid first name"
              outputDiv.current.innerText = _msg;
              return false;  
            }
    
            if(txtemail.current.value == null | txtemail.current.value.trim().length == 0) {
              _msg = "## please enter a valid email"
              outputDiv.current.innerText = _msg;
              return false;  
            }
    
            if(txtcomment.current.value == null | txtcomment.current.value.trim().length == 0) {
              _msg = "## please enter a valid comment"
              outputDiv.current.innerText = _msg;
              return false; 
            }
    
            outputDiv.current.innerText = "form submitted"
    
            _msg = `## form submit: ${txtfirstname.current.value} ${txtlastname.current.value} - ${txtemail.current.value}
            - ${txtcomment.current.value}`
           
            console.log(_msg)
    
            //clear fields
            txtfirstname.current.value = "";
            txtlastname.current.value = "";
            txtemail.current.value = "";
            txtcomment.current.value = "";
    
            //field focus
            txtfirstname.current.focus()
    
        }
      useEffect(()=>{
      console.log("---Contact-Us Page Loaded---")
    
    },[])


    return (
        <>
        <p>Contact Us</p>
        <form>
            <div>
                <span>First Name:</span><input ref={txtfirstname} type="text" placeholder="First Name"/><br/>
                <span>Last Name:</span><input ref={txtlastname} type="text" placeholder="Last Name"/><br/>
                <span>Email:</span><input ref={txtemail} type="text" placeholder="Email Address"/><br/>
                <span>Comments:</span>
                <br/><textarea ref={txtcomment} rows={5} cols={30} placeholder="Comment Here"/><br/>
                <button onclick={btnSubmitForm}>Submit</button>{" "}
            </div>
        </form>
        </>
    )
}

export default ContactUS;