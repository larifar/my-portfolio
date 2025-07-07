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
    image: 'https://private-user-images.githubusercontent.com/114440036/298311821-4d4622f6-040e-465b-8a83-13496d3287e6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE5MTI4MzksIm5iZiI6MTc1MTkxMjUzOSwicGF0aCI6Ii8xMTQ0NDAwMzYvMjk4MzExODIxLTRkNDYyMmY2LTA0MGUtNDY1Yi04YTgzLTEzNDk2ZDMyODdlNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwN1QxODIyMTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jYTJmNWRkOTgwZjI4MzIwNjdjNzg2NTA3ZGQ3MmQ4ZmNhMTAyZDE3MTUxYWMwNTUxZWUxYWM2OGI3NTQ2NzdjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.U5taW5CTTEQJTQYxOPA0rfW80mie9iQ0W2_0-oNS7wE',
    link: 'https://github.com/larifar/brasileirao-api',
  },
  {
    title: 'Memoteca',
    description: 'CRUD feito no Angular 14. Permite criar, editar, buscar e excluir pequenos pensamentos, ideias, trechos. Permite pesquisar palavras para facilitar busca por pensamentos. Permite favoritar pensamentos. Tem filtro de pensamentos favoritos e mural normal.',
    image: 'https://private-user-images.githubusercontent.com/114440036/299314801-fb643f16-c163-4e79-9663-98c887e034ae.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE5MTI4ODksIm5iZiI6MTc1MTkxMjU4OSwicGF0aCI6Ii8xMTQ0NDAwMzYvMjk5MzE0ODAxLWZiNjQzZjE2LWMxNjMtNGU3OS05NjYzLTk4Yzg4N2UwMzRhZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwN1QxODIzMDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYjJhNzZhMWM1NmI0ZjNjZjExZGE3YTE0OWIxYWYwZDY1MzEwMjFkZTk2MThkZGVmNzhiODUyOWM3YjM1YThiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.G-z6pwbDdaXCu61PAVp9iNxSmW13wwhzmKhlRxAlMEI',
    link: 'https://github.com/larifar/angular-small-crud-project',
  },
  {
    title: 'Calculadora de Ração',
    description: 'Aplicativo web simples e intuitivo para donos de pets calcularem facilmente a duração e o custo da ração com base na porção diária, ajudando no planejamento da alimentação do animal.',
    image: 'https://private-user-images.githubusercontent.com/114440036/458067239-6c1265b8-3037-4499-9bcb-ecd8a581f826.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE5MTMwMDMsIm5iZiI6MTc1MTkxMjcwMywicGF0aCI6Ii8xMTQ0NDAwMzYvNDU4MDY3MjM5LTZjMTI2NWI4LTMwMzctNDQ5OS05YmNiLWVjZDhhNTgxZjgyNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwN1QxODI1MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZjMxOTEyY2VjZmJhOWFiNjUwZGYzNjhlNThmZjU4MzNkN2JiMTkxOGY5NTI3YTFlNDg5MmNlOTFkNjIyZWVlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Z7Dtzm3zvbv5rYuv5GajOQdscY4zpGSsqXkNkLrOLfA',
    link: 'https://github.com/larifar/calculadora-racao',
  },
  {
    title: 'Gerador de Senha em Java',
    description: 'Gerador de senha em arquivo executável. Projeto rápido para praticar Collections, manipulação de Strings em Java e JavaFX.',
    image: 'https://private-user-images.githubusercontent.com/114440036/463364553-65335874-4d7a-4c41-a8a4-c4cc865fb0ce.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE5MTMxMjksIm5iZiI6MTc1MTkxMjgyOSwicGF0aCI6Ii8xMTQ0NDAwMzYvNDYzMzY0NTUzLTY1MzM1ODc0LTRkN2EtNGM0MS1hOGE0LWM0Y2M4NjVmYjBjZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwN1QxODI3MDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MDAyZjk3YTFlOWE4ZmQ4MjlhNTQ2MTk2YTI5NDVhNjMwYjk2MmZjYTRlZjhjYzFjNmVjOGFlZjU2OTcwZjYxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.VZkwr5SDOHJx28QjYqajm1Wr5cP0Q31TMWqkXINsdBQ',
    link: 'https://github.com/larifar/GeradorSenhaJava',
  },
  {
    title: 'Resumee',
    description: 'RESUMEE transforma suas anotações do Obsidian (ou arquivos Markdown) em resumos concisos de até uma página e gera 3 perguntas relevantes para otimizar seus estudos com o poder da IA Gemini.',
    image: 'https://private-user-images.githubusercontent.com/114440036/463365639-9fa901d3-c0b9-483d-b582-ed85318cf314.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE5MTMzMzUsIm5iZiI6MTc1MTkxMzAzNSwicGF0aCI6Ii8xMTQ0NDAwMzYvNDYzMzY1NjM5LTlmYTkwMWQzLWMwYjktNDgzZC1iNTgyLWVkODUzMThjZjMxNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwN1QxODMwMzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZDk3OWMzNzE3NzAyMDAwOTAxZGQ1MWRiZDBkNjg2NDU1ZTk0YmY5NmQxY2U4YTA3YTk2OWMwZWMyMTk5ZjE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ZGffkrBTpvVH_rn_pke1FaEKJkdjLfr4sD0rHhf4GbA',
    link: 'https://github.com/larifar/Resumee',
  },
  {
    title: 'Jogo Point&Click',
    description: 'Jogo point/click de dia dos namorados para minha namorada. Feito com Angular e deploy no vercel.',
    image: 'https://private-user-images.githubusercontent.com/114440036/453654581-7f91c4fe-db56-4101-9bb9-505ab8f58127.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE5MTMzNjgsIm5iZiI6MTc1MTkxMzA2OCwicGF0aCI6Ii8xMTQ0NDAwMzYvNDUzNjU0NTgxLTdmOTFjNGZlLWRiNTYtNDEwMS05YmI5LTUwNWFiOGY1ODEyNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwN1QxODMxMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZmI1NmJkYTA0YjZkNGRjOTZlMGMzZjYwOTY5ZGEzMGZkYWIzYTQyMTQ1ZTIwMDZhNDJlMjk0ZTBjMWQ5NjRkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.pokl1NsMqGn8us2qHCPbQ4PNkLXTZyLD7zByfmBMvAU',
    link: 'https://github.com/larifar/dia-dos-namorados',
  },
  {
    title: 'Alurabook',
    description: 'Projeto feito durante o curso de HTML e CSS: responsividade com mobile first da Alura.',
    image: 'https://private-user-images.githubusercontent.com/114440036/463366080-b00d4469-1132-444d-a009-df0621a06039.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE5MTM0MjUsIm5iZiI6MTc1MTkxMzEyNSwicGF0aCI6Ii8xMTQ0NDAwMzYvNDYzMzY2MDgwLWIwMGQ0NDY5LTExMzItNDQ0ZC1hMDA5LWRmMDYyMWEwNjAzOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwN1QxODMyMDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMzA1NTA4ZTYwMmMzMGMyZTU5ZWEzMDdiYTc5OTRjYzY1ZTRhMGQ3YjcwNmIzMWY0ZGI2ZmM0MDAzMTFmMjc3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.K62-KFFrwKPCFtni-Oyhs2rT9FonxtNe8hkNLaTjecY',
    link: 'https://github.com/larifar/Alurabook',
  },
  {
    title: 'Lista de Tarefas Simples',
    description: 'Lista de tarefas simples, podendo criar, riscar, editar e excluir tarefas. Utilizei HTML, CSS e JavaScript para desenvolver a página.',
    image: 'https://private-user-images.githubusercontent.com/114440036/463366426-2f3cbd0c-ea4a-491d-9dd4-4dc7f7aacf1b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE5MTM1MDksIm5iZiI6MTc1MTkxMzIwOSwicGF0aCI6Ii8xMTQ0NDAwMzYvNDYzMzY2NDI2LTJmM2NiZDBjLWVhNGEtNDkxZC05ZGQ0LTRkYzdmN2FhY2YxYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwN1QxODMzMjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mOTc5MDIyN2VhZDVjOTdiMDVmMjkxNGEyYTgxNjI4YzNkMmJiZTNjNzIyNDIwNDc5NDlhNWVmYmZmODIwYTEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.vhe4rGJgTTvVcIprMfOX4nYUOj7d_FTZPaGVE7REjfw',
    link: 'https://github.com/larifar/Lista_Tarefas_Codarme',
  },
];
}
