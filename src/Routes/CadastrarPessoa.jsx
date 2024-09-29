import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Instance from '../components/Instance';



const CadastrarPessoa = () => {
    
    const Navigate = useNavigate();
    const [NomePessoa, setNomePessoa] = useState('');
    const [CodigoPessoa, setCodigoPessoa] = useState('');
    const [Cpf, setCpf] = useState('');
    const [Idade, setIdade] = useState('');
    const [Nacionalidade, setNacionalidade] = useState('');



    const FormDataCadastrarPessoa = { 
        NomePessoa: NomePessoa,
        Codigo_Pessoa: CodigoPessoa,
        Cpf: Cpf,
        Idade: Idade,
        Nacionalidade: Nacionalidade,
    }


    const EventHandleCadastrarPessoa = () => {
        Instance.post('/CadastrarPessoa',FormDataCadastrarPessoa)
        .then(response => {
            console.log(response.data)
            alert("Pessoa cadastrada com sucesso!");  // Mostra uma mensagem de sucesso.
            Navigate('/SobreSistema');
        }).catch(error => {
            console.log(error);
            alert("Erro ao cadastrar pessoa");
        })

    }

    const EventHandleCancelarOperacao = () => {
        return Navigate('/SobreSistema')
    }
    
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
                                     <label htmlFor="Nome">Nome</label>
                                     <input type="text" className="form-control" id="Nome" aria-describedby="Nome" onChange={(event) => setNomePessoa(event.target.value)}   
                                      placeholder="Nome"/>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="Nome">Codigo_Pessoa</label>
                                     <input type="number" className="form-control" id="Nome" aria-describedby="codigo"
                                     onChange={(event) => setCodigoPessoa(event.target.value)} placeholder="Codigo"/>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="Cpf">Cpf</label>
                                     <input type="text" className="form-control" id="Cpf" aria-describedby="Matricula"
                                     onChange={(event) => setCpf(event.target.value)} placeholder="Cpf"/>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="Idade">Idade</label>
                                     <input type="text" className="form-control" id="Idade" aria-describedby="Idade"
                                     onChange={(event) => setIdade(event.target.value)} placeholder="Idade"/>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="Turma">Nacionalidade</label>
                                     <input type="text" className="form-control" id="Nacionalidade" aria-describedby="Nacionalidade" 
                                     onChange={(event) => setNacionalidade(event.target.value)} placeholder="Nacionalidade"/>
                                 </div>
                                 <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-success" onClick={EventHandleCadastrarPessoa}>Cadastrar Pessoa</button>
                                    <button type="submit" className="btn btn-danger" onClick={EventHandleCancelarOperacao}>Cancelar Operação</button>
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