import ButtonCancelar from "../components/ButtonCancelar";
import { useNavigate } from "react-router-dom";


const AtualizarProjetos = () => {

    const Navigate = useNavigate();


    const onClickHandleCancelar = () => {
        return Navigate('/SobreSistema');
    }
    
    const onClickHandleAtualizarRegistro = () => {
        alert('Registro Atualizado');
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