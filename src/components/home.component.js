import React, {Component} from 'react';
import axios from 'axios';
export default class Login extends Component {

constructor(props) {
    
    super(props);
    
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
        email: '',
        password: '',
    }
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

    const user = {
        email: this.state.email,
        password: this.state.password
    }

    console.log(user);

    axios.post('https://botfbmeblot.herokuapp.com/home', user)
        .then(res => console.log(res.data))

    this.setState({
        email:'',
        password:'',
        
    })
}

    render() {

        return(
            <div>
                URUCHAMIANIE BOTA.
                PODAJ LOGIN I HASLO DO FB
                <form onSubmit={this.onSubmit}>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.onChangeEmail} name="email" />
                    </label>
                    <label>
                        Hasło:
                        <input type="password" value={this.state.password} onChange={this.onChangePassword} name="password" />
                    </label>
                    <input type="submit" value="Wyślij" />
                </form>
            </div>
        )
    }
}

