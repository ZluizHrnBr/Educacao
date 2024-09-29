import ButtonCancelar from '../components/ButtonCancelar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastrarProjeto = () => {

    const Navigate = useNavigate();

    const [CodigoProjeto, setCodigoProjeto] = useState('');
    const [NomeProjeto, setNomeProjeto] = useState('');
   
    const [listExperiencia] = useState(['Junior', 'Pleno', 'Sênior']);
    const [obterExperiencia, setObterExperiencia] = useState('');
    const [listStatus, setListStatus] = useState(['Início', ' Em desenvolvimento', 'Finalizado']);
    
    
    const [listAtualizarStatus, setListAtualizarStatus] = useState('');

    const EventChangeStatusAtualizado = (event) => {
        setListAtualizarStatus(event.target.value);
    }
    const onClickEventChangeCancelarRegistro = () => {
        return Navigate('/SobreSistema');
    }

    const EventHandleObterExperiencia = (event) => {
        setObterExperiencia(event.target.value);
    }

    useEffect(() => {

    },[])


    return (
        <div className="container-fluid">
            <br/>
            <div className="row justify-content-center">
                <div className='col-lg-8'>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h3>Cadastrar Projetos</h3>
                            </div>
                            <form>
                            <div className="form-group">
                                <label htmlFor="Nome">Codigo_Projeto</label>
                                <input type="text" className="form-control" id="Nome" aria-describedby="Nome" placeholder="Codigo_Projeto" onChange={(e) => setCodigoProjeto(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Nome">Nome_Projeto</label>
                                <input type="number" className="form-control" id="Nome" aria-describedby="codigo" placeholder="Codigo" onChange={(e) => setCodigoProjeto(e.target.value)}/>
                            </div>
                                <div className="form-group">
                                    <label htmlFor="Idade">Experiência_Codificação</label>
                                    <select className='form-control' onChange={EventHandleObterExperiencia}>
                                        {listExperiencia.map(item => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Turma">Status_Desenvolvimento</label>
                                    <select className='form-control' placeholder='Status' onChange={EventChangeStatusAtualizado}>
                                        {listStatus.map(item => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                    </select>
                                 </div>
                                 
                                <div className='d-flex justify-content-between'>
                                    <button type='submit' className=' btn btn-primary'>Registrar Projeto</button>
                                    <ButtonCancelar Tipo="text" onClick={onClickEventChangeCancelarRegistro}/>
                                </div>

                               
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastrarProjeto;