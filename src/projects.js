export const CATEGORY_DATA = {
    react: {
        title: "React Apps",
        projects: []
    },
    shopify: {
        title: "Shopify Stores",
        projects: ["coffeekit", "twoclothes", "galaxybox"]
    },
    frontend: {
        title: "Front End Devlopment",
        projects: []
    },
    recent: {
        title: "Latest Work",
        projects: ["coffeekit", "twoclothes", "galaxybox"]
    }
}

export const PROJECT_DATA = {
    coffeekit: {
        title: "Coffee Kit",
        heroURL: "/assets/coffee-kit-hero.jpg",
        thumbnailURL: "/assets/coffee-kit-thumbnail.jpg",
        content: {
            description: `This project is a shopify store setup for the demo brand Coffee Kit that sells aromas from various parts 
                          of the world. There are two custom sections that I developed for this store that I would like to highlight.
                         `
            ,
            sections: [
                {
                    id:"1",
                    header: "Variable Product Description",
                    body: `The first custom built feature for this store is a variable product description. The information is displayed in
                           a neat table with coffee bean icons showing the strength and acidity of the coffee. Whenever a new product is created 
                           for the store in the Shopify backend, the table is automatically filled with the correct infromation.
                          `
                    ,
                    imageURLs: {
                        desktop: [
                            '/assets/coffee-kit-content-1.png',
                            '/assets/coffee-kit-content-2.png'
                        ]
                    }
                },
                {
                    id:"2",
                    header: "Sliding Testimonial Section",
                    body: `The second custom built feature is a sliding testimonial using the CSS library slick slider. The slider has a 
                            responsive layout that always shows enough slides to fill the current screen size. 
                          `
                    ,
                    imageURLs: {
                        desktop: [
                            '/assets/coffee-kit-content-3.png'
                        ],
                        mobile: [
                            '/assets/coffee-kit-content-3-mobile.png'
                        ]
                    }
                }
            ]
        }
    },
    twoclothes: {
        title: "Two Clothes",
        heroURL: "/assets/two-clothes-hero.jpg",
        thumbnailURL: "/assets/two-clothes-thumbnail.jpg",
        content: {
            description: `This project is a shopify store setup for the demo brand Two Clothes. This store only uses features already available 
                            in the shopify customizer. This shows how powerful Shopify is as a platform to create a beautiful store with minimal custom coding.
                         `
            ,
            sections: [
                {
                    id:'1',
                    header:'As Seen On Instagram',
                    body: `This section takes an outfit from an instagram post and breaks it down into the individual products allowing the customer
                            to easliy reacreate the outfit or a part of the outfit themselves. Clicking on an item of the outfit generates its image, title, 
                            and price as well as a link to the product page.
                          `
                    ,
                    imageURLs: {
                        desktop: ['/assets/two-clothes-content-1.png'],
                        mobile: ['/assets/two-clothes-content-1-mobile.png']
                    }   
                },
                {
                    id:'2',
                    header:'Mega Menu',
                    body: `Shopify makes it easy to create an appealing menu for your store. The mega menu allows navigation to a variety of product 
                            collections while simultaneously advertising special products such as new arrivals.`,
                    imageURLs: {
                        desktop: ['/assets/two-clothes-content-2.png'],
                        mobile: ['/assets/two-clothes-content-2-mobile.png']
                    }
                },
                {
                    id:'3',
                    header:'Product Filters',
                    body: `Shopify allows for easy filtering of products to make searching for a particular product a smooth experience for the user. 
                            For this store I set up filtering based on the availability, price, color and size of the product. Any property of a product
                            defined in the stores backend can use this filtering system.
                          `,
                    imageURLs: {
                        desktop: ['/assets/two-clothes-content-3.png'],
                        mobile: ['/assets/two-clothes-content-3-mobile.png']
                    }

                }
            ]
        }
    },
    galaxybox: {
        title: "Galaxy Box",
        heroURL: "/assets/galaxy-box-hero.jpg",
        thumbnailURL: "/assets/galaxy-box-thumbnail.jpg"
    }
}
