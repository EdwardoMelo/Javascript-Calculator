function Criacalculadora(){

    return{
        display: document.querySelector('.display'), //ATRIBUTOS 
        btnClear: document.querySelector('.btn-clear'),


        inicia(){ //METODOS
            this.cliqueBotoes();
            this.PressionaEnter();
        },
        PressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13){
                    console.log('enter');
                    this.realiza_conta();
                }   
            })
        },
        clearDisplay(){
            this.display.value = '';
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },
        realiza_conta(){
            let conta = this.display.value //conta recebe o value do display ( o que foi digitado)
            try{
                conta = eval(conta);
                if(!conta) { //se conta não for verdadeira 
                    alert('Conta inválida!')
                    return;
                }   
                this.display.value = conta; //se for, o display assume o valor da conta 

            }catch(e){
                alert('Conta Inválida!');
                return;
            }
        },
        cliqueBotoes(){ //
            document.addEventListener('click', function(e){ //NO DOCUMENTO TODO
                el = e.target;  //elemento recebe target do evento, que no caso é o botao clicado 
                if (el.classList.contains('btn-num')){
                    this.btn_display(el.innerText); 
                }
                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')){
                   this.realiza_conta();
                }
                
            }.bind(this))
    }, 
        btn_display(valor){ //valor que o botão joga no Display
            this.display.value += valor
        }
    }
}


const calculadora = Criacalculadora();
calculadora.inicia();
