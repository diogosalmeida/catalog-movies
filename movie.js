'use strict';

const moment = require('moment');

    const movie = {
        title: "Guerra dos mundos",
        poster: "https://goo.gl/Smo65r",
        direction: "Steven Spielberg",
        synopsis: "Ray Ferrier é um estivador divorciado, afastado de seus filhos, que vivem com a mãe. Quando sua ex-esposa deixa as crianças para ele cuidar durante alguns dias, o planeta é atacado por alienígenas que surgem do chão conduzindo tripods e destruindo tudo que encontram pelo caminho. Ray tenta proteger os seus filhos e fugir para Boston para se juntar a sua ex-esposa. Durante o trajeto, enfrenta várias adversidades e ataques.",
        comments: [
            {
                body: "Filmes muito interessante, fiquei com medo do final <3",
                date: moment().format('DD-MM-YYYY')
            }],
        release_year: "28 de junho de 2005",
        likes: 2000,
        did_not_like: 100,
        budget: 5000000
    }

module.exports = movie;
