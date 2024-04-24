
export function obterDadosJSON(path: string): Promise<Response> | null {
    return fetch(path)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao carregar arquivo JSON");
            return response.json();
        })
        .catch(e => console.error(e));
}
