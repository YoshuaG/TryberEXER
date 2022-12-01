let info = {
    personagem: 'Margarida ',
    origem: 'Pato Donald ',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald ',
    recorrente: 'sim',
};


let info2 = {
    personagem: ' tio patinhas',
    origem: ' Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: ' O ultimo MacPatinhas',
    recorrente: 'sim',
};
for (let properties in info) {
    if (
        properties === 'recorrente' &&
        info[properties] === 'sim' &&
        info2[properties] === 'sim'
    ) {
        console.log('ambos recorrentes');
    } else {
        console.log(info[properties] + 'e' + info2[properties]);
    }

}