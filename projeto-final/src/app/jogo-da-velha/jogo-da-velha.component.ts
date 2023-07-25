import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) {}

  ngOnInit() {
    this.jogoDaVelhaService.inicializar()
  }

  get showInicio(): boolean {
    return this.jogoDaVelhaService.ShowInicio;
  }

  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.ShowTabuleiro;
  }

  get showFinal(): boolean {
    return this.jogoDaVelhaService.ShowFinal;
  }
  
  iniciarJogo($event: any): void {
    this.jogoDaVelhaService.iniciarJogo();
  }

  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY)
  }

  exibirX(posX: number, posY: number):boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY)
  }

  exibirO(posX: number, posY: number):boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY)
  }

  exibirVitoria(posX: number, posY: number):boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY)
  }

  get jogador(): number {
    return this.jogoDaVelhaService.jogador;
  }

  novoJogo($event: any) : void {
    this.jogoDaVelhaService.novoJogo();
  }

}
