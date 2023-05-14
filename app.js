let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn'); // acesso a nodeList(todos os botões)

btns.forEach(function(btn){  // acesso para cada botão de botões
    btn.addEventListener('click', function(e){  // add o escutador de cada botão
        // console.log(e.currentTarget.classList);   lista de classe que cada elemento tem...
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else {
            count = 0;
        }

        //mudando cores
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        } 
        if(count === 0){
            value.style.color = '#222';
        }

        value.textContent = count;
    })
})