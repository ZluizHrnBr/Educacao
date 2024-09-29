import { useState } from "react";
import Instance from '../components/Instance';

const CadastrarExperiencia = () => {

    const [NomeExperiencia, setNomeExperiencia] = useState('');

    const FormData = { 
        NomeExperiencia: NomeExperiencia
    }

    const onClickEventChangeCadastrarExperiencia = async () => {
        const Resposta = await Instance.post('/CadastrarExperiencia', FormData)
                        .then(response => {
                            if (response.data != null){
                                alert('Experiência cadastrada com sucesso!');
                            }else{
                                alert('Não foi possível cadastrar a experiência.');
                            }
                        }).catch(error => {
                            console.log(error);
                            alert('Erro ao cadastrar a experiência.');
                        })
        return Resposta;
    }

    return (
        <div className="container-fluid">
            <br/>
            <h3 className="text-center">Cadastrar Experiência</h3>
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div>
                                    <label htmlFor="Experiência">Experiência</label>
                                    <input type="text" className="form-control" id="Experiência" aria-describedby="Experiência" 
                                    onChange={(event) => setNomeExperiencia(event.target.value)} placeholder="Experiência"/>
                                </div>
                                <br/>
                                <div className="justify-content-between">
                                    <button type="submit"className="btn btn-success"  onClick={onClickEventChangeCadastrarExperiencia}>Cadastrar Experiência</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CadastrarExperiencia;