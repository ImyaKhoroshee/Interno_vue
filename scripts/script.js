const app = {
    data() {
        return {
            articlesData: [
                { id: 1, src: '../assets/blog_1.png', alt: 'interior', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
                { id: 2, src: '../assets/blog_2.png', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
                { id: 3, src: '../assets/blog_3.png', alt: 'interior', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' },
                { id: 4, src: '../assets/blog_4.png', alt: 'interior', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
                { id: 5, src: '../assets/blog_5.png', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
                {id: 6, src: '../assets/blog_6.png', alt: 'interior', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design'}
            ]
        };
    },
    methods: {
        
    },
       
};

Vue.createApp(app).mount('#cardbox-container');