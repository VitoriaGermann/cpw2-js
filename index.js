/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {Array} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people) {
    return people.reverse();
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {Array} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades) {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {Number} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean) {
    return mean >= 7 ? "Aprovado" : "Reprovado";
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
};
