import { useState } from "react";
import ButtonEntrar from "../components/ButtonEntrar";
import ButtonCancelar from "../components/ButtonCancelar";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";


const TelaLoginAluno = () => {

    const Navigate = useNavigate();
    const [numeroMatricula, setNumeroMatricula] = useState('');
    const [Senha, setSenha] = useState('');


    const HandleNumeroMatricula = (event) => {
        setNumeroMatricula(event.target.value);
    }

    const HandleSenha = (event) => {
        setSenha(event.target.value);   
    }

    const EventHandleButtonEntrar = () => {
        return Navigate('/TelaPerfilAluno')
    }

    const EventHandleButtonCancelar = () => {
        return Navigate('/SobreSistema')
    }

    return(
        <div className="container-fluid">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <form>
                        <h2 className="text-center">Entrar em Aluno</h2>
                         <div className="form-group">
                         <label for="Codigo">Matrícula_Estudante</label>
                             <Input Tipo="text" Nome="Nome" onChange={HandleNumeroMatricula}/>
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

export default TelaLoginAluno;