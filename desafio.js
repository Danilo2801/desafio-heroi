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
                ataque = 'usou magia'
                break;
            case 'guerreiro':
                ataque = 'usou magia'
                break;
            case 'monge':
                ataque = 'usou magia'
                break;
            case 'nija':
                ataque = 'usou magia'
                break;
            default:
                break;
        }
    }

}

