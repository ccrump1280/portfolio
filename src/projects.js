export const CATEGORY_DATA = {
    react: {
        title: "React Apps & Dynamic JS",
        projects: ["youtube","upwork"]
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
        projects: ["coffeekit", "twoclothes", "galaxybox", "youtube", "upwork"]
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
                    id:"coffee-kit-1",
                    header: "Variable Product Description",
                    body: `The first custom built feature for this store is a variable product description. The information is displayed in
                           a neat table with coffee bean icons showing the strength and acidity of the coffee. Whenever a new product is created 
                           for the store in the Shopify backend, the table is automatically filled with the correct information.
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
                    id:"coffee-kit-2",
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
                    id:'two-clothes-1',
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
                    id:'two-clothes-2',
                    header:'Mega Menu',
                    body: `Shopify makes it easy to create an appealing menu for your store. The mega menu allows navigation to a variety of product 
                            collections while simultaneously advertising special products such as new arrivals.`,
                    imageURLs: {
                        desktop: ['/assets/two-clothes-content-2.png'],
                        mobile: ['/assets/two-clothes-content-2-mobile.png']
                    }
                },
                {
                    id:'two-clothes-3',
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
        thumbnailURL: "/assets/galaxy-box-thumbnail.jpg",
        content: {
            description: `This project is a shopify store setup for the demo brand GalaxyBox. This product recreates the cosmos in the comfort of your 
                          own home.
                         `
            ,
            sections: [
                {
                    id:'galaxy-box-1',
                    header:'Third Party Review App Implementation',
                    body:`For this store I implemented the third party app JudgeMe to allow the user to see and write reviews directly on the product page. 
                            The review can include a display name, email address (kept private), rating, title, message and an optional picture or video.
                          
                    `,
                    imageURLs: {
                        desktop: ['/assets/galaxy-box-content-1.png', '/assets/galaxy-box-content-2.png']
                    }
                },
                {
                    id:'galaxy-box-2',
                    header:'Affiliate Product Page',
                    body:`For this store I created an affiliate product page. This page has the same basic layout as the product page but instead of adding
                            the product to the cart it links to the affiliate products page, in this case a product on Amazon.
                    `,
                    imageURLs: {
                        desktop:['/assets/galaxy-box-content-3.png'],
                        mobile:['/assets/galaxy-box-content-3-mobile.png/']
                    }
                },
                {
                    id: 'galaxy-box-3',
                    header:'Customizable FAQ page',
                    body: `I also created a fully customizable FAQ page for this store complete with headers and collapsible tabs. As the store owner,
                            updating the questions, answers and even headers is a breeze within the Shopify customizer and the new information will 
                            automatically have the correct styling.
                    `,
                    imageURLs: {
                        desktop:['/assets/galaxy-box-content-4.png'],
                        mobile:['/assets/galaxy-box-content-4-mobile.png']
                    }
                }
            ]
        }
    },
    youtube: {
        title: "Youtube API",
        heroURL: '/assets/youtube-hero.png',
        thumbnailURL: '/assets/youtube-thumbnail.png',
        content: {
            description: 'This project uses the YouTube API to recreate the video searching capabilites of the platform.',
            sections: [
                {
                    id:'youtube-1',
                    header:'Search Results',
                    body: `Submitting a search retrieves the corresponding videos from the YouTube API. The results are displayed
                            in a responsive grid that includes the video thumbnail, title, and channel.
                    `,
                    imageURLs: {
                        desktop:['/assets/youtube-content-1.png'],
                        mobile:['/assets/youtube-content-1-mobile.png']
                    }
                },
                {
                    id:'youtube-2',
                    header:'Video Player',
                    body: `Clicking on a video will hide the search results and create a video player directly on the page using iframe.
                            The video can be watched in the application itself or the video has a link to watch on YouTube as well.`
                    ,
                    imageURLs: {
                        desktop: ['/assets/youtube-content-2.png'],
                        mobile: ['/assets/youtube-content-2-mobile.png']
                    }
                }
            ]
        }
    },
    upwork: {
        title: "UpWork Job Board",
        heroURL:"/assets/upwork-hero.png",
        thumbnailURL: "/assets/upwork-thumbnail.png",
        content: {
            description:'This React App mimics the job board of Upwork. The project includes a login page, a job board page, and individual job pages.',
            sections: [
                {
                    id: 'upwork-1',
                    header: 'Login Page',
                    body: `Created a login page for the app that routes to the jog boards page on successful login.`,
                    imageURLs: {
                        desktop: ['/assets/upwork-content-1.png'],
                        mobile: ['/assets/upwork-content-1-mobile.png']
                    }
                },
                {
                    id: 'upwork-2',
                    header: 'Job Board',
                    body: `The job board page displays a listing of jobs each including a title, hourly rate, post time, location, and description.
                            The page includes a categories tab that displays jobs that matches the chosen category. Clicking on any job routes to that job's
                             description page.`,
                    imageURLs: {
                        desktop: ['/assets/upwork-content-2.png'],
                        mobile: ['/assets/upwork-content-2-mobile.png']
                    }
                }
            ],
        }
    }
}
