import { useEffect, useState } from "react";


const CadastrarEquipe = () => {

    const [NomeEquipe, setNomeEquipe] = useState('');
    const [listNomeAluno, setListNomePessoa] = useState([]);
    const [CodigoEquipe, setCodigoEquipe] = useState('');
    const [NomeAluno, setNomeAluno] = useState('');

    useEffect(() => {

    },[])

    return(
        <div className="container-fluid">
            <br/>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center">Cadastrar Equipe</h3>

                            <form>
                                <div className="form-group">
                                    <label htmlFor="Nome">Nome da Equipe</label>
                                    <input type="text" className="form-control" id="Nome" aria-describedby="Nome" placeholder="Nome" onChange={(e) => setNomeEquipe(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Endereco">Codigo_Equipe</label>
                                    <input type="text" className="form-control" id="Codigo_Equipe" aria-describedby="Endereco" placeholder="Codigo_Equipe" onChange={(e) => setCodigoEquipe(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Cidade">Nome_Aluno</label>
                                    <select className="form-control"  placeholder="Nome Aluno" value="Nome_Aluno" onChange={(e) => setNomeAluno(e.target.value)} >

                                    </select>
                                </div>
                                <div> 
                                    <button className="btn btn-primary" type="submit">Cadastrar Equipe</button>
                                </div>
                               
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CadastrarEquipe;