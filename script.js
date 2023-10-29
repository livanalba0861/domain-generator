
window.onload = function () {

let domainList = document.getElementById('siteList');

const pronouns = ['The', 'our','my', 'your'];
const adj = ['incredible', 'wonderful','fenomenal']
const names = ['solution','market','shop', 'site']

const domains =[]
const generate = (pronombre, adjetivo, nombre)=> 'www.' + pronombre + adjetivo + nombre +'.com';


pronouns.forEach((prono)=>{
    adj.forEach((adjectives)=>{
        names.forEach((nombres)=>{
            domains.push(generate(prono,adjectives,nombres))
        })
    })
}
)

domains.forEach((domain) => {
    const li = document.createElement('li');
    li.textContent = domain;
    domainList.appendChild(li);
});

}
