export function obterDadosJSON(path) {
    return fetch(path)
        .then(response => {
        if (!response.ok)
            throw new Error("Erro ao carregar arquivo JSON");
        return response.json();
    })
        .catch(e => console.error(e));
}
