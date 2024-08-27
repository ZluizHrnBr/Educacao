

const ButtonCancelar = ({onClick}) => {
    return (
        <div>
             <div>
                <button className="btn btn-danger justify-content-end" type="submit" onClick={onClick}>Cancelar</button>
            </div>
        </div>
    );

}

export default ButtonCancelar;