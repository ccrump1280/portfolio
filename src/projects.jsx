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
                    imageURLs: [
                        '/assets/coffee-kit-content-1.png',
                        '/assets/coffee-kit-content-2.png'
                    ]
                },
            ]
        }
    },
    twoclothes: {
        title: "Two Clothes",
        heroURL: "/assets/two-clothes-hero.jpg",
        thumbnailURL: "/assets/two-clothes-thumbnail.jpg"
    },
    galaxybox: {
        title: "Galaxy Box",
        heroURL: "/assets/galaxy-box-hero.jpg",
        thumbnailURL: "/assets/galaxy-box-thumbnail.jpg"
    }
}
