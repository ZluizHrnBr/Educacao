import Input from "../components/Input";
import ButtonEntrar from "../components/ButtonEntrar";
import ButtonCancelar from "../components/ButtonCancelar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const TelaLoginProfessor = () => {

    const Navigate = useNavigate();

    const[CodigoProfessor, setCodigoProfessor] = useState('');

    const[Senha, setSenha] = useState('');

    const HandleCodigoProfessor = (event) => {
        setCodigoProfessor(event.target.value);
    }

    const HandleSenha = (event) => {
        setSenha(event.target.value);
    }

    const EventHandleButtonEntrar = () =>{
        return Navigate('/TelaPerfilProfessor');
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
                        <h2 className="text-center">Entrar em Professor</h2>
                         <div className="form-group">
                         <label for="Codigo">Codigo_Professor</label>
                             <Input Tipo="text" Nome="Nome" onChange={HandleCodigoProfessor}/>
                        </div>
                        <div className="form-group">
                        <label for="Senha">Senha</label>
                            <Input  Tipo="password" Nome="Senha" onChange={HandleSenha}/>
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

export default TelaLoginProfessor;