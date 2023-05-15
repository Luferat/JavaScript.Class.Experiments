// Importa a classe 'pai'.
import { Animal } from './Animal.class.js'

// Cria a classe 'Artropode' que extende 'Animal' e a exporta.
export class Artropode extends Animal {

    // Atributos
    #pernas
    #antenas
    #cheiro

    // Método construtor.
    constructor(nome, especie, pernas, antenas) {

        // Eleva os parâmetros para a classe 'pai'.
        super(nome, especie)

        // Trata os outros parâmetros.
        this.#pernas = pernas
        this.#antenas = antenas
    }

    // Getters.
    get pernas() { return this.#pernas }
    get antenas() { return this.#antenas }
    get cheiro() { return this.#cheiro }

    // Setters.
    set pernas(pernas) { this.#pernas = pernas }
    set antenas(antenas) { this.#antenas = antenas }
    set cheiro(cheiro) { this.#cheiro = cheiro }

}