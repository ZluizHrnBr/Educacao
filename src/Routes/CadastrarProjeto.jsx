import Input from '../components/Input';
import ButtonCancelar from '../components/ButtonCancelar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CadastrarProjeto = () => {
    
    const [NomeAluno, setDataNomeAluno] = useState('');
    const Navigate = useNavigate();


    const EventChangeNomeAluno = (event) => {
        setDataNomeAluno(event.target.value);
    } 

    const onClickEventChangeCancelarRegistro = () => {
        return Navigate('/SobreSistema');
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className='col-lg-8'>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h3>Cadastrar Projetos</h3>
                            </div>
                            <form>
                            <div className="form-group">
                                     <label for="Nome">Codigo_Projeto</label>
                                     <input type="text" className="form-control" id="Nome" aria-describedby="Nome" placeholder="Nome"/>
                                 </div>
                                 <div className="form-group">
                                     <label for="Nome">Nome_Projeto</label>
                                     <input type="number" className="form-control" id="Nome" aria-describedby="codigo" placeholder="Codigo"/>
                                 </div>
                                 <div className="form-group">
                                     <label for="Matricula">Área Desenvolvimento</label>
                                     <input type="text" className="form-control" id="Area" aria-describedby="Area" placeholder="Area"/>
                                 </div>
                                 <div className="form-group">
                                     <label for="Idade">Experiência_Codificação</label>
                                     <input type="text" className="form-control" id="Idade" aria-describedby="Idade" placeholder="Experiência"/>
                                 </div>
                                 <div className="form-group">
                                     <label for="Turma">Status_Desenvolvimento</label>
                                     <input type="text" className="form-control" id="Status" aria-describedby="Status" placeholder="Status"/>
                                 </div>
                                 
                                <div className='d-flex justify-content-between'>
                                    <button type='submit' className=' btn btn-primary'>Registrar projeto com Alocação</button>
                                    <ButtonCancelar Tipo="text" onClick={onClickEventChangeCancelarRegistro}/>
                                </div>

                               
                            </form>
                            <div>
                                    <label for="Nome_aluno">Nome do Aluno</label>    
                                    <Input Tipo="text" Nome="Aluno" onChange={EventChangeNomeAluno}/>
                                    <button type='submit' className='btn btn-succes'>Registrar Projeto vinculando Aluno</button>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastrarProjeto;