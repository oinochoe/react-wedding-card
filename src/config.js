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
            name: '메이자르웨딩홀',
            address: '용산구 플라자',
            latitude: 35.1969469,
            longitude: 128.5657094,
        },
        at: '2020-05-07 12:00',
    },
    bridal: {
        name: '김명수',
        image: require('./img/bride.jpg'),
        phone: '+821056144070',
        instagram: 'https://www.instagram.com/copstyle86/',
        github: 'https://github.com/oinochoe',
        father: '김전명',
        mother: '김가연',
        position: '장남',
    },
    groom: {
        name: '성심영',
        image: require('./img/groom.jpg'),
        phone: '+821056144070',
        instagram: false,
        father: '성상정',
        mother: '박경순',
        position: '장녀',
    },
    image: {
        header: require('./img/chungdam.jpg'),
        gallery: gallery.map((item) => ({
            original: item,
            thumbnail: item,
        })),
    },
};
