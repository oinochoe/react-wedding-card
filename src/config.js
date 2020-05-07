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
        googleMapAPIKey: 'AIzaSyDSjYdBUN_NDRJQShxs0ugvMBV2goZvT2o',
        comment: {
            livere: {
                enable: true, // if false, not rendering livere comment component
                service: 'city',
                uid: 'MTAyMC8yNTYzNi8yMjMy',
            },
            facebook: {
                enable: false, // if false, not rendering facebook comment component
                appId: '1535680996513864',
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
        at: '2018-01-27 12:00',
    },
    bridal: {
        name: '신사동',
        image: require('./img/bridal.jpeg'),
        phone: '+821011111111',
        facebook: false, // if false, not showing facebook icon
        father: '서울시',
        mother: '강남구',
        position: '장남',
    },
    groom: {
        name: '역곡동',
        image: require('./img/groom.jpeg'),
        phone: '+821022222222',
        facebook: 'https://www.facebook.com/luckyyowu',
        father: '부천시',
        mother: '원미구',
        position: '차녀',
    },
    image: {
        header: require('./img/header.jpg'),
        gallery: gallery.map((item) => ({
            original: item,
            thumbnail: item,
        })),
    },
};
