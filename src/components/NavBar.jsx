import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark  justify-content-end">
        
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link className="nav-link text-white" to='/SobreSistema'>Sobre</Link>
                    </li>
                    
                    <li class="nav-item active">
                        <Link className="nav-link text-white" to='/CadastrarPessoa'>Cadastrar Pessoa</Link>
                    </li>

                     <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Páginas
                            </a>
                     <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to='/LoginPessoa'>Entrar em Pessoa</Link>
                        <Link className="dropdown-item" to='/TelaLoginAluno'>Entrar em Aluno</Link>
                        <Link className="dropdown-item" to='/TelaLoginProfessor'>Entrar em Professor</Link> 
                     </div>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
}

export default NavBar;