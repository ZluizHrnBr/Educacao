import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import TelaLoginProfessor from './Routes/TelaLoginProfessor';
import TelaPerfilProfessor from './Routes/TelaPerfilProfessor';
import LoginPessoa from './Routes/LoginPessoa';
import TelaPerfilAluno from './Routes/TelaPerfilAluno';
import TelaLoginAluno from './Routes/TelaLoginAluno'; 
import TelaPessoa from './Routes/TelaPessoa';
import SobreSistema from './Routes/SobreSistema';
import CadastrarPessoa from './Routes/CadastrarPessoa';
import CadastrarProfessorAluno from './Routes/CadastrarProfessorAluno';
import CadastrarProjeto from './Routes/CadastrarProjeto';
import AtualizarProjetos from './Routes/AtualizarProjetos';
import DeletarProjetos from './Routes/DeletarProjetos';
import TabelaProjetos from './Routes/TabelaProjetos';
import TabelaEquipes from './Routes/TabelaEquipes';
import ThemeProvider from './components/GerenciarEstado';
import CadastrarExperiencia from './Routes/CadastrarExperiencia';
import FormacaoEquipes from './Routes/FormacaoEquipes';
import CadastrarFormEquipe from './Routes/CadastrarFormEquipe';


const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:'/TelaLoginProfessor',
        element: <TelaLoginProfessor />
      },
      {
        path:'/TelaLoginAluno',
        element: <TelaLoginAluno /> 
      },
      {
        path: '/TelaPerfilAluno',
        element: <TelaPerfilAluno />  
      },
      {
        path: '/TelaPerfilProfessor',
        element: <TelaPerfilProfessor />
      },
      {
        path: '/LoginPessoa',
        element: <LoginPessoa />
      },
      {
        path: '/EntrarPessoa',
        element: <TelaPessoa />
      },
      {
        path:'/SobreSistema',
        element: <SobreSistema />
      },
      {
        path:'/CadastrarPessoa',
        element: <CadastrarPessoa />  
      },
      {
        path:'/CadastrarProfessorAluno',
        element: <CadastrarProfessorAluno />  
      },
      {
        path: '/CadastrarProjeto',
        element: <CadastrarProjeto />
      },
      {
        path: '/AtualizarProjetos',
        element: <AtualizarProjetos />  
      }, 
      {
        path: '/DeletarProjeto',
        element: <DeletarProjetos />
      },
      {
        path: '/TabelaProjetos',
        element: <TabelaProjetos />
      },
      {
        path: '/TabelaEquipe',
        element: <TabelaEquipes />  // aqui você irá fazer a chamada para a função que retorna a lista de equipe
      },
      {
        path: '/CadastrarExperiencia',
        element: <CadastrarExperiencia /> // aqui você irá fazer a chamada para a função que retorna a lista de experiências
      },
      {
        path: '/FormacaoEquipe',
        element: <FormacaoEquipes />
      },
      {
        path: '/CadastrarEquipe',
        element: <CadastrarFormEquipe />
      }
    ]
}])

root.render(
  <React.StrictMode>
    <ThemeProvider>
        <RouterProvider router={routes}/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
