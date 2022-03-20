import './App.css';
import Users from "./Users/Users";
import {useEffect, useState} from "react";
import {userService} from "./services/user.service";
import User from "./User/User";

function App() {

    //Simple form
    const formHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const send = (e) => {
        e.preventDefault();
        console.log(form)
    }
   //////////////////////////////////////////
    const [form, setForm] = useState({name: '', age: 1});
    const[users, setUsers]=useState([]);
    const[userId, setUserId] = useState(0);
    const[user, setUser] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, [])

    const formHandlerOptions = (e) => {
        const id = e.target.value;
        setUserId(id);
    }

    const sendOption = (e) =>{
        e.preventDefault();
        userService.getById(userId).then(value => setUser(value));
    }

    return (
        <div>
            {/*<Users/>*/}
            <div>
                <form onSubmit={send}>
                    <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                    <label>Age: <input type="number" name={'age'} value={form.age} onChange={formHandler}/></label>
                    <button>Submit</button>
                </form>
            </div>

            <div>
                <form onSubmit={sendOption}>
                    <select name={'userId'} onChange={formHandlerOptions}>
                        {users.map(value => <option key={value.id} value={value.id}>{value.name}</option>)}
                    </select>
                    <button>Submit</button>
                </form>
            </div>

            {user && <User user={user}/> }

        </div>);
}

export default App;
