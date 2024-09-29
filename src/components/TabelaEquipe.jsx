
const TabelaEquipe = () => {
    return(
        <div className="container-fluid">
            <br/>
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <h5>Tabela de Equipe</h5>
                            </div>
                            <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nome do desenvolvedor </th>
                                            <th scope="col">Experiência de desenvolvimento</th>
                                            <th scope="col">Nome da Atividade</th>
                                            <th scope="col">Status de desenvolvimento</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Equipe 1</td>
                                            <td>Engenheiro Sênior</td>
                                            <td>Projeto Agricultura</td>
                                            <td>Início</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Equipe 2</td>
                                            <td> Android</td>
                                            <td>Aplicativo E-commerce</td>
                                            <td>Início</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Equipe 3 </td>
                                            <td>Arquiteto de Software</td>
                                            <td>Projeto Rede-Social</td>
                                            <td>Finalizado</td>
                                        </tr>
                                     </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabelaEquipe;