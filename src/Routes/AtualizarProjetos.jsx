import ButtonCancelar from "../components/ButtonCancelar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AtualizarProjetos = () => {

    const Navigate = useNavigate();

    const [experiencias] = useState(['Junior', 'Pleno', 'Sênior']);
    const [obterExperiência, setObterExperiência] = useState('');

    const [listStatusDesenvolvimento] = useState(['Início', "Em Desenvolvimento", "Finalizado"]);
    const [obterStatusDesenvolvimento, setObterStatusDesenvolvimento] = useState('');

    const onClickHandleCancelar = () => {
        return Navigate('/SobreSistema');
    }
    
    const onClickHandleAtualizarRegistro = () => {
        alert('Registro Atualizado');
    }

    const EventHandleObterStatusDesenvolvimento = (event) =>{
        setObterStatusDesenvolvimento(event.target.value)
    }

    return(
        <div className="container-fluid">
            <br/>
            <div className="row justify-content-center">
                <div className='col-lg-5'>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h3>Atualizar Projetos</h3>
                            </div>
                            <form>
                            <div className="form-group">
                                     <label htmlFor="Nome">Codigo_Projeto</label>
                                     <input type="text" className="form-control" id="Nome" aria-describedby="Nome" placeholder="Nome"/>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="Nome">Nome_Projeto</label>
                                     <input type="number" className="form-control" id="Nome" aria-describedby="codigo" placeholder="Codigo"/>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="Matricula">Área Desenvolvimento</label>
                                     <input type="text" className="form-control" id="Area" aria-describedby="Area" placeholder="Area"/>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="Idade">Experiência_Codificação</label>
                                     <select className="form-control">
                                        {experiencias.map(item => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                     </select>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="Turma">Status_Desenvolvimento</label>
                                     <select className="form-control">
                                        {listStatusDesenvolvimento.map(item => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                     </select>
                                 </div>

                                 <div className='d-flex justify-content-between'>
                                    <button type='submit' className=' btn btn-primary' onClick={onClickHandleAtualizarRegistro}>Atualizar Projeto</button>
                                    <ButtonCancelar Tipo="text" onClick={onClickHandleCancelar}/>
                                 </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AtualizarProjetos;