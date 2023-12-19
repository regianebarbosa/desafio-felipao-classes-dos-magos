class heroi {
	constructor (nome, idade, tipo) {
    	this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
	atacar () {
		const ataques = {
        mago: "magia",
        guerreiro: "espada",
        monge: "artes marciais",
        ninja: "shuriken",
        };
        
        const ataque = ataques [this.tipo];
        console.log (`O ${this.tipo} atacou usando: ${ataque}.`);    	
        }
}
let heroi1 = new heroi ("Mestre dos Magos", 200, "mago");
heroi1.atacar ();

let heroi2 = new heroi ("Batman", 38, "guerreiro");
heroi2.atacar ();

let heroi3 = new heroi ("Aang", 120, "monge");
heroi3.atacar ();

let heroi4 = new heroi ("Tartarugas ninjas", 16, "ninja");
heroi4.atacar ();