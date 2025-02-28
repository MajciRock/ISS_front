import {SyntheticEvent, useState} from "react";
import axios from "axios";

const Register = () => {
    const[FirstName,setFirstName] = useState("")
    const[LastName,setLastName] = useState("")
    const[Email,setEmail] = useState("")
    const[Password,setPassword] = useState("")
    const[ConfirmPassword,setConfirmPassword] = useState("")

    const url = "http://localhost:3000/auth/register"
    const[redirect,setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const data= {
            firstName: FirstName,
            lastName: LastName,
            email: Email,
            password: Password,
        }

        console.log(data)

        let res = await axios.post(url, data)
    }

    return (
        <>
            <div className="container">
                <h2>Registracija</h2>
                <form onSubmit={submit}>
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="Vstavi ime"
                               id="firstNameInput" onChange={(e) => setFirstName(e.target.value)}/>
                        <label htmlFor="firstNameInput">Ime</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="Vstavi priimek"
                               id="lastNameInput" onChange={(e) => setLastName(e.target.value)}/>
                        <label htmlFor="lastNameInput">Priimek</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="Vstavi e-pošto"
                               id="emailInput" onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="emailInput">E-Pošta</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Vstavi geslo"
                               id="passwordInput" onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="passwordInput">Geslo</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Ponovi geslo"
                               id="passwordConfirmInput"/>
                        <label htmlFor="passwordConfirmInput">Ponovi geslo</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Registriraj</button>
                </form>
            </div>
        </>
    )
}
export default Register;