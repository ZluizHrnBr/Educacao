import TabelaFormacaoEquipe from "../components/TabelaFormacaoEquipe";

const FormacaoEquipes = () => {

    const onClickFormacaoEquipe = () => {
        console.log("Formar Equipe !!!!")
    }

    return (
        <div className="container-fluid">
            <TabelaFormacaoEquipe onClickFormarEquipe={onClickFormacaoEquipe} />
        </div>
    );
}

export default FormacaoEquipes; 