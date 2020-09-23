import React, {Component} from 'react';
import axios from 'axios';
export default class Login extends Component {
constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangebusinessName = this.onChangebusinessName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
        name: '',
        businessName: '',
        email: '',
        password: '',
    }
}
onChangeName(e) {
    this.setState({
        name: e.target.value
    })
}
onChangebusinessName(e) {
    this.setState({
        businessName: e.target.value,
    })
}
onChangeEmail(e) {
    this.setState({
        email: e.target.value,
    })
}
onChangePassword(e) {
    this.setState({
        password: e.target.value,
    })
}
onSubmit(e) {
    e.preventDefault();

    const newUser = {
        name: this.state.name,
        businessName: this.state.businessName,
        email: this.state.email,
        password: this.state.password
    }

    console.log(newUser);

    axios.post('http://localhost:8080/register', newUser)
        .then(res => console.log(res.data))

    this.setState({
        name: '',
        businessName: '',
        email:'',
        password:'',
    })
}
    render() {
        return(
            <div>
                REJESTRACJA
                <form onSubmit={this.onSubmit}>
                <label>
                        Imię:
                        <input type="text" value={this.state.name} onChange={this.onChangeName} name="name" />
                    </label>
                    <label>
                        BusinessName:
                        <input type="text" value={this.state.businessName} onChange={this.onChangebusinessName} name="businessName" />
                    </label>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.onChangeEmail} name="email" />
                    </label>
                    <label>
                        Hasło:
                        <input type="text" value={this.state.password} onChange={this.onChangePassword} name="password" />
                    </label>
                    <input type="submit" value="Wyślij" />
                </form>
            </div>
        )
    }
}

