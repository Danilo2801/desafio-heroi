class meuHeroi{
	constructor(nomeHeroi, idadeHeroi, tipoHeroi){
	  this.nomeHeroi = this.nomeHeroi
	  this.idadeHeroi = this.idadeHeroi
	  this.tipoHeroi = this.tipoHeroi
	}

	atacar(){
	  console.log(`O ${this.tipoHeroi} atacou usando ${this.nomeHeroi}`)
      }

}

let ataque = new meuHeroi("mago", "magia")

ataque.atacar()