# # DESENVOLVIMENTO DE APLICAÇÕES MÓVEIS II ATIVIDADE 2 (SERVER)

## ROTAS E RESOURCES

### Exemplos:
~ http://localhost:3333/coaches
~ http://localhost:3333/contacts

## MÉTODOS HTTP
~ GET: Buscar ou listar uma informação
~ POST: Criar alguma nova informação
~ PUT: Atualizar uma informação existente
~ DELETE: Deletar uma informação existente

~ Corpo (Requeset Body): Dados para criação ou atualização de um registro
~ Route Params: Identificar qual recurso eu quero atualizar ou deletar
~ Query Params: Paginação, filtros, ordenação

## Funcionalidades (Casos de uso)

### Conexões

~ Rota para listar o total de conexões realizadas;
~ Rota para criar uma nova conexão;

### Aulas

~ Rota para criar uma aula;
~ Rota para listar aulas;
    ~ Filtrar por matéria, dia da semana e horário;