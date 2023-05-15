export class Animal {

    // Atributos com valores predefinidos.
    #nome = ''
    #especie = ''

    // Atributos.
    #familia
    #nascimento

    // Atributo com valores diferentes.
    #metrica = {}

    // Método construtor.
    constructor(nome, especie) {

        // Recebe, sanitiza e atribui aos atributos.
        this.#nome = nome.trim()
        this.#especie = especie.trim()
    }

    // Métodos da classe.
    alimentacao() { }
    vacinar() { }

    // Método get.
    get nome() {
        return this.#nome
    }

    // Método set.
    set nome(nomea) {
        this.#nome = nomea.trim()
    }

}
