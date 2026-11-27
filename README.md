# Controle Financeiro

Sistema web de controle financeiro pessoal, criado para substituir uma planilha: importa extratos em CSV de diferentes bancos e reúne entradas, saídas e compras parceladas em um único banco de dados.

Em desenvolvimento.

A modelagem do banco e a conexão do Node.js com o PostgreSQL estão prontas. O importador de extratos, a API e a interface ainda estão em construção .

## Sobre o projeto

O controle das finanças era feito em uma planilha preenchida à mão. A ideia deste projeto é automatizar esse processo, começando pela importação dos extratos que os próprios bancos permitem exportar.

Objetivos:

- reunir, em um só lugar, as movimentações de mais de um banco
- importar extratos em CSV, respeitando que cada banco usa um formato diferente;
- separar as movimentações por banco;
- permitir editar a descrição de cada movimentação importada;
- futuramente, trocar a importação manual por uma integração automática (Open Finance).

## Tecnologias

Node.js / PostgreSQL / dbdiagram.io

