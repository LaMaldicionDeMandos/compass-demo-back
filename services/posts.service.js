
class PostsService {
    constructor() {
    }

    getAll() {
        return Promise.resolve(
            [{
                id: 1,
                title: "Keeway K-light 202 Chopera - Totalmente Financiada!",
                image: "https://http2.mlstatic.com/D_NQ_NP_2X_925707-MLA44552835178_012021-F.webp",
                tag: "CHOPPER",
                date: "2018-03-27T18:44:34+0000",
            },
                {
                    id: 2,
                    title: "Yamaha Fz S Fi D Disco Trasero 18 Cuotas Ciclofox",
                    image: "https://http2.mlstatic.com/D_NQ_NP_2X_871314-MLA45934695332_052021-F.webp",
                    tag: "ROUTE",
                    date: "2021-05-01T18:44:34+0000",
                },
                {
                    id: 3,
                    title: "Ktm Exc - F 250 Enduro Ultima Unidad Disponible Mod 2019",
                    image: "https://http2.mlstatic.com/D_NQ_NP_2X_998404-MLA44849313471_022021-F.webp",
                    tag: "ENDURANCE",
                    date: "2021-10-23T18:44:34+0000",
                },
                {
                    id: 4,
                    title: "Zanella Exclusive 150 - Ahora 12/18 - Créditos Dni!",
                    image: "https://http2.mlstatic.com/D_NQ_NP_2X_699171-MLA46212608323_052021-F.webp",
                    tag: "SCOOTER",
                    date: "2020-07-03T18:44:34+0000",
                },
                {
                    id: 5,
                    title: "Suzuki Vs 800 Intruder Usado Moto Chopper Clásica",
                    image: "https://http2.mlstatic.com/D_NQ_NP_2X_915789-MLA47919119662_102021-F.webp",
                    tag: "CHOPPER",
                    date: "2021-10-30T18:44:34+0000",
                }]
        );
    }
}

const service = new PostsService();
module.exports = service;
