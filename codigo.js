function Aluno(){
    let nome = window.prompt('Digite sue Nome:')
    let n1 = Number(window.prompt('Digite a primeira nota')) 
    let n2 = Number(window.prompt('Digite a segunda nota'))
    let n3 = Number(window.prompt('Digite a terceira nota'))
    media = (n1+n2+n3)/3
    
    if (media >= 6 ){
    document.querySelector(".aluno").innerHTML="<br><p style= color:green >"+"O aluno "+nome+" ficou com média de "+media.toFixed(1)+", logo foi aprovado!"+"</p>"}
    
    else {
   document.querySelector(".aluno").innerHTML="<br><p style= color:red >"+"O aluno "+nome+" ficou com média de "+media.toFixed(1)+", logo foi reprovado!"+"</p>"}

}


