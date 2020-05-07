const gallery = [
    require('./img/gallery/1.png'),
    require('./img/gallery/2.jpg'),
    require('./img/gallery/3.jpg'),
    require('./img/gallery/4.jpg'),
    require('./img/gallery/5.jpg'),
    require('./img/gallery/6.jpg'),
];

export default {
    global: {
        googleMapAPIKey: 'AIzaSyAaz23lDWE61j1SQZIU8F33ThI06QRbABU',
        comment: {
            livere: {
                enable: true,
                service: 'city',
                uid: 'MTAyMC81MDAxNi8yNjUwNw==',
            },
            facebook: {
                enable: true,
                appId: '250286269417019',
            },
        },
    },
    title: 'Wedding Invitation',
    wedding: {
        place: {
            name: '시트콤홀',
            address: '시트콤빌딩',
            latitude: 35.1969469,
            longitude: 128.5657094,
        },
        at: '2020-05-07 12:00',
    },
    bridal: {
        name: '김영민',
        image: require('./img/bridal.jpeg'),
        phone: '+821056144070',
        instagram: 'https://www.instagram.com/copstyle86/',
        github: 'https://github.com/oinochoe',
        father: '김병석',
        mother: '김수진',
        position: '장남',
    },
    groom: {
        name: '윤이랑',
        image: require('./img/groom.jpeg'),
        phone: '+821056144070',
        instagram: false,
        father: '윤현남',
        mother: '박경옥',
        position: '장녀',
    },
    image: {
        header: require('./img/header.jpg'),
        gallery: gallery.map((item) => ({
            original: item,
            thumbnail: item,
        })),
    },
};
