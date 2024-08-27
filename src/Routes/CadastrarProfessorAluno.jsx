

const CadastrarProfessorAluno = () => {
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
                                     <label for="Nome">Nome</label>
                                     <input type="text" className="form-control" id="Nome" aria-describedby="Nome" placeholder="Nome"/>
                                 </div>
                                 <div className="form-group">
                                     <label for="Nome">Codigo_Pessoa</label>
                                     <input type="number" className="form-control" id="Nome" aria-describedby="codigo" placeholder="Codigo"/>
                                 </div>
                                 <div className="form-group">
                                     <label for="Senha">Senha</label>
                                     <input type="password" className="form-control" id="Senha" aria-describedby="Senha" placeholder="Senha"/>
                                 </div>
                                 <div className="form-group">
                                     <label for="Matricula">Matricula</label>
                                     <input type="text" className="form-control" id="Matricula" aria-describedby="Matricula" placeholder="Matricula"/>
                                 </div>
                                 <div className="form-group">
                                     <label for="Turma">Turma</label>
                                     <input type="text" className="form-control" id="Turma" aria-describedby="Turma" placeholder="Turma"/>
                                 </div>
                                 <button type="submit" className="btn btn-primary">Cadastrar Aluno</button>
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