import React from "react";

class SignUpPage extends React.Component {

    render () {
        return (

            <div>
                <input placeholder= "Nome" type="text"/>
                <input placeholder= "Nickname" type="text"/>
                <input placeholder= "Email" type="email"/>
                <input placeholder= "Senha" type="text"/>
                <button>Criar usuário</button>
            </div>
        );
    }

}

export default SignUpPage;