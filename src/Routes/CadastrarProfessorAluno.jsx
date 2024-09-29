import { useEffect, useState } from "react";
import Instance from "../components/Instance";

const CadastrarProfessorAluno = () => {
    
    const [experienciasList, setExperienciasList] = useState([]);

    const [obterExperiencia, setObterExperiencia]  = useState(''); 
    const [CodigoPessoa, setCodigoPessoa] = useState('');
    const [Senha, setSenha] = useState('');
    const [Matricula, setMatricula] = useState('');
    const [Turma, setTurma] = useState('');

    const FormDataAluno = {
        Codigo_Pessoa: CodigoPessoa,
        Turma: Turma,
        Senha: Senha,
        Matricula: Matricula,
        Experiencia_Codificacao: obterExperiencia
    }

    const onClickCadastrarAluno = async() => {
        const Resposta = await Instance.post('/CadastrarAluno', FormDataAluno)
                        .then(response => {
                            alert("Aluno cadastrado com sucesso!");
                            console.log(response.data)
                        })
                        .catch(error => {
                            console.log(error);
                            alert("Erro ao cadastrar aluno");
                        })
        return Resposta;
    }

    

    const getExperiencias = async () => {
        const Resposta = await Instance.get('/ListarExperiencia')
                        .then(response => {
                            setExperienciasList(response.data);
                            console.log(response.data)
                        })
                        .catch(error => {
                            console.log(error);
                        })
        return Resposta;
    }

    useEffect(() => {
        getExperiencias();
    },[])

    return (
        <div className="container-fluid">
            <div className="text-center">
                <h3>Cadastrar Aluno e Professor</h3>
            </div>
            <hr/>
            <br/>
            <div className="row justify-content-start">
                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-body">
                             <h5 className="text-center card-title">Cadastrar Aluno</h5>
                             <hr/>
                             <form>
                                 <div className="form-group">
                                     <label htmlFor="Nome">Codigo_Pessoa</label>
                                     <input type="number" className="form-control" id="Nome" aria-describedby="codigo"
                                     onChange={(event) => setCodigoPessoa(event.target.value)} placeholder="Codigo"/>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="Senha">Senha</label>
                                     <input type="password" className="form-control" id="Senha" aria-describedby="Senha" 
                                     onChange={(event) => setSenha(event.target.value)} placeholder="Senha"/>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="Matricula">Matricula</label>
                                     <input type="text" className="form-control" id="Matricula" aria-describedby="Matricula"
                                     onChange={(event) => setMatricula(event.target.value)} placeholder="Matricula"/>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="Turma">Experiência_Codificação</label>
                                     <select className="form-control" onChange={(event) => setObterExperiencia(event.target.value)}>
                                        {experienciasList.map(item => (
                                            <option key={item.id_Experiencia} value={item.descricao}>{item.descricao}</option>
                                        ))}
                                     </select>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="Turma">Turma</label>
                                     <input type="text" className="form-control" id="Turma" aria-describedby="Turma" 
                                     onChange={(event) => setTurma(event.target.value)} placeholder="Turma"/>
                                 </div>
                                 <button type="submit" className="btn btn-primary" onClick={onClickCadastrarAluno}>Cadastrar Aluno</button>
                             </form>

                        </div>
                    </div>
                </div>
            </div>

            <br/>

            <hr/>
            <br/>

            <div className="row justify-content-start">
                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-body">
                             <h5 className=" text-center card-title">Cadastrar Professor</h5>
                             <hr/>
                            <form>
                                 <div className="form-group">
                                     <label for="Nome">Nome</label>
                                     <input type="text" className="form-control" id="Nome" aria-describedby="Nome" placeholder="Nome"/>
                                 </div>
                                
                                 <div className="form-group">
                                     <label for="Nome">Codigo_Pessoa</label>
                                     <input type="number" className="form-control" id="Nome" aria-describedby="codigo" placeholder="Codigo"/>
                                 </div>
                                
                                 <div className="form-group">
                                     <label for="Matricula">Matrícula_Professor</label>
                                     <input type="text" className="form-control" id="Matricula" aria-describedby="Matricula" placeholder="Matricula"/>
                                 </div>
                                
                                 <div className="form-group">
                                     <label for="Matricula">Senha</label>
                                     <input type="password" className="form-control" id="Senha" aria-describedby="Senha" placeholder="Senha"/>
                                 </div>


                                 <button type="submit" className="btn btn-primary">Cadastrar Professor</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );

}

export default CadastrarProfessorAluno;