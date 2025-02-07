class Arma {
  constructor(private readonly nome: string, private _dano: number, private readonly descricao: string) {}

  getNome(): string {
    return this.nome;
  }

  getDescricao(): string {
    return this.descricao;
  }

  getDano(): number {
    return this._dano;
  }

  setDano(dano: number): void {
    if (dano >= 0) this._dano = dano;
  }
}

export default Arma