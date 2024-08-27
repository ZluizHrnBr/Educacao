import { useNavigate } from "react-router-dom";

const TelaPessoa = () => {

    const Navigate = useNavigate();
    
    const EventHandleCadastrarAlunoProfessor = () => {
        return Navigate('/CadastrarProfessorAluno');
    }

    return (
        <div className="container-fluid">
            <br/>


            <br/>

            <div className="row justify-content-start">
                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-body">
                             <h5 className="card-title">Perfil de pessoa</h5>
                             <hr/>
                             <p><strong>Codigo da Pessoa:  </strong></p>    
                             <p><strong>Nome da Pessoa: </strong></p>
                             <p><strong>Idade: </strong></p>
                            
                            <button className="btn btn-primary" onClick={EventHandleCadastrarAlunoProfessor}>Cadastrar no Sistema</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TelaPessoa;