import React, {Component} from 'react';
import axios from 'axios';
export default class Login extends Component {
constructor(props) {
    super(props);

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
                        <input type="text" value={this.state.password} onChange={this.onChangePassword} name="password" />
                    </label>
                    <input type="submit" value="Wyślij" />
                </form>
            </div>
        )
    }
}

