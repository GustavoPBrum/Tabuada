function calcular(){
    var num = document.getElementById('tabuada')
    var res = document.getElementById('resultado') //Criação de variáveis

    if(num.value.length == 0){ //Verifica se há valor inserido 
        alert('Informe um valor para a tabuada!')
        res.innerHTML = 'impossível calcular!'
    } else {
        var n = Number(num.value) //Transforma em number os valores inseridos
        res.innerHTML = 'Contando: <br>' 

        if(n >= 0){
            let resultado = ''; //Variável resultado contendo uma string vazia (onde guardaremos os resultados)

            for(var i = 0; i <= 10; i++) //Variável "i" é o multiplicador desta tabuada 

            resultado +=  `${n} x ${i} = ${n * i} <br>` //A primeira parte é a apresentação dos número escolhido e multiplicador. A segunda parte guardamos o produto de n x i, mostrando apenas o resultado desta multiplicação

            res.innerHTML += resultado //Aqui geramos um loop com até o multiplicador 10 como definido no "for", exibindo no html os cálculo do início ao final do loop 
        } else{
            let resultado = ''; 

            for(var i = 0; i <= 10; i++)  
            resultado +=  `${n} x ${i} = ${n * i} <br>` 

            res.innerHTML += resultado 
        }
        
    }
}