

const CadastrarPessoa = () => {
    return (
        <div className="container-fluid">
            <div className="text-center">
                <h3>Cadastrar Pessoa</h3>
            </div>

            <hr/>
            
            <br/>
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                             <h5 className="text-center card-title">Cadastrar Pessoa</h5>
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
                                     <label for="Matricula">Cpf</label>
                                     <input type="text" className="form-control" id="Matricula" aria-describedby="Matricula" placeholder="Matricula"/>
                                 </div>
                                 <div className="form-group">
                                     <label for="Idade">Idade</label>
                                     <input type="text" className="form-control" id="Idade" aria-describedby="Idade" placeholder="Idade"/>
                                 </div>
                                 <div className="form-group">
                                     <label for="Turma">Nacionalidade</label>
                                     <input type="text" className="form-control" id="Nacionalidade" aria-describedby="Nacionalidade" placeholder="Nacionalidade"/>
                                 </div>
                                 <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-success">Cadastrar Pessoa</button>
                                    <button type="submit" className="btn btn-danger">Cancelar Operação</button>
                                 </div>
                                 
                             </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastrarPessoa;