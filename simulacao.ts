import Arma from "./arma";
import Personagem from "./Personagem";
import Inimigo from "./Inimigo";

const espada = new Arma("Espada Longa", 50, "Uma espada clássica de metal.");
const machado = new Arma("Machado de Guerra", 60, "Machado pesado e devastador.");
const arco = new Arma("Arco Longo", 40, "Arco para ataques à distância.");

const guerreiro = new Personagem("Herói", 500, 30);

const orc = new Inimigo("Orc", 200, 20);
const goblin = new Inimigo("Goblin", 100, 10);
const troll = new Inimigo("Troll", 300, 40);
const esqueleto = new Inimigo("Esqueleto", 150, 15);
const demonio = new Inimigo("Demônio", 400, 50);

guerreiro.atacar(orc);
orc.comportamentoAleatorio(guerreiro);