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
    name = "Vitória";
    const sum = grades.reduce((total, grade) => total + grade, 0);
    const average = sum / grades.length;
    const roundedAverage = Math.round(average * 100) / 100; // Arredondar para duas casas decimais
    const status = roundedAverage >= 7 ? "Aprovado" : "Reprovado";

    return `Aluno: ${name}\nMédia: ${roundedAverage}\nStatus: ${status}`;
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
    return 0;
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

    const [day, month, year] = strDate.split("/");
    const monthIndex = parseInt(month, 10) - 1;
    const monthName = months[monthIndex];

    return `${day} de ${monthName} de ${year}`;
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}