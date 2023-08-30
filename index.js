/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){

    // TODO
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.

    return people.reverse();
}

/**
 * Essa função recebe um array de notas e um nome de aluno, e retorna uma string com o nome do aluno, sua média e status de aprovação
 *
 * @param {Array} grades : Um array de notas
 * @param {String} name : O nome do aluno
 * @returns Uma string com o nome do aluno, sua média e status de aprovação
 */
function mean(grades, name) {
    
    var sumGrades = grades[0] + grades[1] + grades[2];
    var meanGrades = sumGrades/grades.length;
    
    return meanGrades;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.
    var result = mean >= 7 ? "aprovado" : "reprovado";

    return result;
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {String} strDate : Uma string no formato de data (dd/mm/aaaa)
 * @returns Uma descrição da data informada
 */
function wide(strDate) {
    const months = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    var date = strDate.split("/");

    if (months.includes(months[date[1] - 1])) {
        var wideDate = strDate === "" ? "" : date[0] + " de " + months[date[1] - 1] + " de " + date[2];
    } else {
        var wideDate = "";
    }

    return wideDate;
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}