import { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import ButtonEntrar from "../components/ButtonEntrar";
import ButtonCancelar from "../components/ButtonCancelar";

const LoginPessoa = () => {

    const Navigate = useNavigate();

    const [nomePessoa, setNomePessoa] = useState('');

    const [Senha, setSenha] = useState('');


    const EventHandleNomePessoa = (event) =>{
        setNomePessoa(event.target.value);
    }

    const EventHandleSenha = (event) =>{
        setSenha(event.target.value);
    }
    
    const EventHandleButtonEntrar = () =>{
        alert('Entrando em pessoa');
        return Navigate('/EntrarPessoa');
    }

    const EventHandleButtonCancelar = () => {
        return Navigate('/SobreSistema');
    }

    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <form>
                            <h2 className="text-center">Entrar em Pessoa</h2>
                             <div className="form-group">
                             <label for="Codigo">Nome_Usuario</label>
                                 <Input Tipo="text" Nome="Nome" onChange={EventHandleNomePessoa}/>
                            </div>
                            <div className="form-group">
                            <label for="Senha">Senha</label>
                                <Input  Tipo="password" Nome="Senha" onChange={EventHandleSenha}/>
                            </div>
                            <div className="d-flex justify-content-between">
                                <ButtonEntrar onClick={EventHandleButtonEntrar}/>
                                <ButtonCancelar onClick={EventHandleButtonCancelar}/>
                            </div>
                        </form>
                    </div>
             </div>
            </div>
        </div>
    );
}

export default LoginPessoa;