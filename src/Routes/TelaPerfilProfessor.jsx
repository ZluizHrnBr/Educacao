import { useState } from 'react';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';

const TelaPerfilProfessor = () => {

    const [NomeAluno, setNomeAluno] = useState('');
    
    const Navigate = useNavigate();

    const EventChangeBuscarAluno = (event) => {
        setNomeAluno(event.target.value)
    }

    const OnClickEventChangeBuscarAluno = () => {

    }

    const onClickEventChangeAtualizarProjeto = () => {
        return Navigate('/AtualizarProjetos');
    }

    const onClickEventChangeDeletarProjeto = () => {
        return Navigate('/DeletarProjeto');
    }

    return(
        <div className="container-fluid">
            <br/>
            <div className="row justify-content-center"> 
                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-center card-title"> Perfil Professor</h5>
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

                        <div>
                           <div>
                                <h3 className='text-center'>Tabela de projetos Criadas pelo Professor Gestor de Projetos</h3>
                                
                                <form className='form-row'>
                                    <div className='form-group col-md-6 '>
                                        <label for="Nome">Nome do Aluno</label>
                                        <Input Tipo="text" Nome="Aluno" onChange={EventChangeBuscarAluno}/> 

                                    </div>
                                    <div className='form-group col-md-8 '>
                                        <button type='submit' className='btn btn-success' onClick={OnClickEventChangeBuscarAluno}>Buscar Aluno</button>
                                    </div>
                                    
                                </form>
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
                            <button type="submit" className="btn btn-primary" onClick={onClickEventChangeAtualizarProjeto}>Atualizar Registro de projetos</button>
                            <button type="submit" className="btn btn-danger" onClick={onClickEventChangeDeletarProjeto}> Deletar projetos</button>
                        </div>
                        <br/>
                    </div>
                   
                </div>
               
            </div>

        </div>
    );
}

export default TelaPerfilProfessor;