import { useEffect, useState } from "react";
import List from "./list";
import Form from "./form";
function Contact(){
    const [contacts,setContacts] = useState([
    {
        fullname:"Mustafa",
        phone_number:"0555 585 2478"
    },
    {
        fullname:"Nebati",
        phone_number:"0585 987 7898"

    }
    ]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts])
    return(
        <div id="container">
            <h1 style={{textAlign:"left",marginBottom:"50px"}}>My Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}
export default Contact;
