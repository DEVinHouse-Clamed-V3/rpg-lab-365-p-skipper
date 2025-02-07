import Personagem from "./Personagem";

class Inimigo extends Personagem {
  atacar(alvo: Personagem): void {
    if (Math.random() >= 0.2) {
      alvo.receberDano(this.getForca() + (this.getArma() ? this.getArma()!.getDano() : 0));
    }
  }

  comportamentoAleatorio(jogador: Personagem): void {
    if (Math.random() >= 0.5) {
      this.atacar(jogador);
    }
  }
}

export default Inimigo