class meuHeroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }

    atacar() {
        let ataque
        switch (this.tipoHeroi) {
            case 'mago':
                ataque = 'usando magia'
                break;
            case 'guerreiro':
                ataque = 'usando espada'
                break;
            case 'monge':
                ataque = 'usando artes marciais'
                break;
            case 'nija':
                ataque = 'usando shuriken'
                break;
            default:
                ataque = 'usando ataque desconhecido'
                break;
        }

        console.log(`O ${this.tipoHeroi} atacou ${ataque}`)

    }
        
}

let ataqueHeroi = new meuHeroi("Kiko", 30, "mago")
ataqueHeroi.atacar()


