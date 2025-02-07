import Arma from "./arma";

class Personagem {
  constructor(private nome: string, private vida: number, private forca: number, private arma: Arma | null = null) {}

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getVida(): number {
    return this.vida;
  }

  setVida(vida: number): void {
    this.vida = vida;
  }

  getForca(): number {
    return this.forca;
  }

  setForca(forca: number): void {
    this.forca = forca;
  }

  getArma(): Arma | null {
    return this.arma;
  }

  setArma(arma: Arma | null): void {
    this.arma = arma;
  }

  atacar(alvo: Personagem): void {
    if (Math.random() >= 0.5) {
      const dano = this.forca + (this.arma ? this.arma.getDano() : 0);
      alvo.receberDano(dano);
    }
  }

  receberDano(dano: number): void {
    this.vida -= dano;
  }
}

export default Personagem