import { useState } from 'react';
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';

const TelaPerfilProfessor = () => {

    const [NomeAluno, setNomeAluno] = useState('');
    
    const Navigate = useNavigate();

    const EventChangeBuscarAluno = (event) => {
        setNomeAluno(event.target.value)
    }

    const OnClickEventChangeBuscarAluno = () => {

    }

    const onClickCadastrarProjeto = () => {
        return Navigate('/CadastrarProjeto');
    }

    const onClickEventChangeAtualizarProjeto = () => {
        return Navigate('/AtualizarProjetos');
    }

    const onClickEventChangeCadastrarExperiência = () => {
        return Navigate('/CadastrarExperiencia')
    }

    const onClickEventChangeDeletarProjeto = () => {
        return Navigate('/DeletarProjeto');
    }

    return(
        <div className="container-fluid">
            <br/>
            <div className="row justify-content-center"> 
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-center card-title"> Perfil Professor</h5>
                            <div>
                                <p>Nome do Professor: </p>
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
                              
                            <div className='d-flex justify-content-between'>
                                <button type='submit'className='btn btn-primary' onClick={onClickCadastrarProjeto}>Cadastrar Projeto</button>
                                <button type='submit' className='btn btn-primary' onClick={onClickEventChangeCadastrarExperiência}>Cadastrar Experiência</button>
                            </div>
                        </div>
                       <hr />
                       <div className='text-center'>
                            <h4>Tabela de Formação de Equipes</h4>
                       </div>

                       <Link className='text-dark' to='/FormacaoEquipe'>Formação de Equipes</Link>
                       <Link className='text-dark' to='/CadastrarEquipe'>Formar Equipe manual</Link>
                    </div>
                   
                </div>
               
            </div>

        </div>
    );
}

export default TelaPerfilProfessor;