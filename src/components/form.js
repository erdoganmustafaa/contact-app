import { useState } from "react"
const defaultInputValues = {fullname:"",phone_number:""}
function Form({addContact,contacts}){
    
    const[form,setForm] = useState(defaultInputValues);
    const onChangeInput = (e) =>{
        setForm({...form,[e.target.name]:e.target.value});
    };
    const onSubmit = (e) =>{
        e.preventDefault();
        if(form.fullname ==="" || form.phone_number ===""){
            return false;
        }
        addContact([...contacts,form]);
        setForm(defaultInputValues);
    };
    return(
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" value={form.fullname} placeholder="FullName.." name="fullname" onChange={onChangeInput}/>
            </div>
            <div>
                <input type="text" value={form.phone_number} placeholder="Phone Number" name="phone_number" onChange={onChangeInput}/>
            </div> 
                <button className="addButton">Add</button>
            
        </form>
    );
}
export default Form;