
import TabelaEquipe from '../components/TabelaEquipe';
import Spinner from '../components/Spinner';
import { useEffect, useState } from 'react';

const TabelaEquipes = () => {

    const [boolSpinner, setBoolSpinner] = useState(false)

    const onClickSpinner = () => {
        setBoolSpinner(true)
    }


    return(
        <div className="container-fluid">
            <TabelaEquipe/>
          
        </div>
    );

}

export default TabelaEquipes;