import { useNavigate } from "react-router-dom";



const TelaPerfilAluno = () => {
    const Navigate = useNavigate();

    const onClickHandleAtualizarProjeto = () => {
        return Navigate('/AtualizarProjetos')
    }

    return( 
        <div className="container-fluid">
            <br/>
            <div className="row justify-content-center"> 
                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-center card-title"> Perfil Aluno</h5>
                            <div>
                                <p>Nome do Estudante: </p>
                            </div>
                            <div>
                                <p>Número Matrícula: </p>
                            </div>
                            <div>
                                <p>Idade: </p>
                            </div>
                            <div>
                                <p>Nacionalidade: </p>
                            </div>
                        </div>

                        <hr/>

                        <div className="">
                           <div className="text-center">
                                <h3>Tabela de projetos</h3>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nome do Projeto</th>
                                            <th scope="col">Área de desenvolvimento</th>
                                            <th scope="col">Experiências para desenvolvimento</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Em desenvolvimento</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Iniciando</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry the Bird</td>
                                            <td>aaa</td>
                                            <td>@twitter</td>
                                            <td>Finalizado</td>
                                        </tr>
                                     </tbody>
                                </table>
                                <hr/>
                           </div>
                        </div>
                        
                        <div className="d-flex justify-content-between p-1">
                            <button type="submit" className="btn btn-primary" onClick={onClickHandleAtualizarProjeto}>Atualizar Registro de projetos</button>
                        </div>
                        <br/>
                    </div>
                   
                </div>
               
            </div>

        </div>
    );
}

export default TelaPerfilAluno;