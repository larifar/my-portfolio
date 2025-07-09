import { NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { ProjectItemComponent } from "../../components/project-item/project-item.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItemComponent, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projects = [
  {
    title: 'Brasileirao Api',
    description: 'Projeto de WebScrapping feito em Java 17 com Spring Boot, desenvolvimento de um bot que captura informações de partidas de futebol do Brasileirão em tempo real. Desenvolvimento da API com padrão de arquitetura REST para exposição de dados.',
    image: 'assets/imgs/api-scrapping.png',
    link: 'https://github.com/larifar/brasileirao-api',
  },
  {
    title: 'Memoteca',
    description: 'CRUD feito no Angular 14. Permite criar, editar, buscar e excluir pequenos pensamentos, ideias, trechos. Permite pesquisar palavras para facilitar busca por pensamentos. Permite favoritar pensamentos. Tem filtro de pensamentos favoritos e mural normal.',
    image: 'assets/imgs/memoteca.png',
    link: 'https://github.com/larifar/angular-small-crud-project',
  },
  {
    title: 'Campanha de Vacinação',
    description: 'Projeto fictício de campanha de vacinação animal contra a raiva, com informações sobre a vacina, lista de postos e integração com Google Maps para encontrar o posto mais próximo de você.',
    image: 'assets/imgs/campanhavacinacao.png',
    link: 'https://github.com/larifar/project-campanha-vacinacao',
  },
  {
    title: 'Calculadora de Ração',
    description: 'Aplicativo web simples e intuitivo para donos de pets calcularem facilmente a duração e o custo da ração com base na porção diária, ajudando no planejamento da alimentação do animal.',
    image: 'assets/imgs/calculadora racao.png',
    link: 'https://github.com/larifar/calculadora-racao',
  },
  {
    title: 'Gerador de Senha em Java',
    description: 'Gerador de senha em arquivo executável. Projeto rápido para praticar Collections, manipulação de Strings em Java e JavaFX.',
    image: 'assets/imgs/geradorsenha.png',
    link: 'https://github.com/larifar/GeradorSenhaJava',
  },
  {
    title: 'Resumee',
    description: 'RESUMEE transforma suas anotações do Obsidian (ou arquivos Markdown) em resumos concisos de até uma página e gera 3 perguntas relevantes para otimizar seus estudos com o poder da IA Gemini.',
    image: 'assets/imgs/resumee.png',
    link: 'https://github.com/larifar/Resumee',
  },
  {
    title: 'Jogo Point&Click',
    description: 'Jogo point/click de dia dos namorados para minha namorada. Feito com Angular e deploy no vercel.',
    image: 'assets/imgs/jogopoint.png',
    link: 'https://github.com/larifar/dia-dos-namorados',
  },
  {
    title: 'Alurabook',
    description: 'Projeto feito durante o curso de HTML e CSS: responsividade com mobile first da Alura.',
    image: 'assets/imgs/alurabook.png',
    link: 'https://github.com/larifar/Alurabook',
  },
  {
    title: 'Lista de Tarefas Simples',
    description: 'Lista de tarefas simples, podendo criar, riscar, editar e excluir tarefas. Utilizei HTML, CSS e JavaScript para desenvolver a página.',
    image: 'assets/imgs/listatarefas.png',
    link: 'https://github.com/larifar/Lista_Tarefas_Codarme',
  },
];
}
