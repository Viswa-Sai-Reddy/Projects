import { rest } from 'msw';
// For more information on creating simulated HTTP API endpoints, please visit https://mswjs.io/docs/
export const routes = [
  rest.get('/dishes', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id:1,
          title:"buttermilk pancakes",
          category: "breakfast",
          price: 15.99,
          img: "./images/breakfast-1.jpeg",
          desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed,`
        },
        {
          id:2,
          title:"dinner double",
          category: "lunch",
          price: 13.99,
          img: "/images/lunch-1.avif",
          desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`
        },
        {
          id:3,
          title:"godzilla milkshake",
          category: "shakes",
          price: 6.99,
          img: "/images/shakes-1.avif",
          desc: `Tombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
        },
        {
          id:4,
          title:"country delight",
          category: "breakfast",
          price: 20.99,
          img: "/images/breakfast-2.avif",
          desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin
      
          mlkshk truffaut,`
        },
        {
          id:5,
          title:"egg attack",
          category: "lunch",
          price: 22.99,
          img: "/images/lunch-2.avif",
          desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`
        },
        {
          id:6,
          title:"oreo dream ",
          category: "shakes",
          price: 18.99,
          img: "/images/shakes-2.avif",
          desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,`
        },
        {
          id:7,
          title:"bacon overflow",
          category: "breakfast",
          price: 8.99,
          img: "/images/breakfast-3.avif",
          desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`
        },
        {
          id:8,
          title:"american classic",
          category: "lunch",
          price: 12.99,
          img: "/images/lunch-3.avif",
          desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`
        },
        {
          id:9,
          title:"quarantaine buddy ",
          category: "shakes",
          price: 16.99,
          img: "/images/shakes-3.avif",
          desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,`
        },
        {
          id:10,
          title:"bison steak",
          category: "dinner",
          price: 22.99,
          img: "/images/dinner.avif",
          desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`
        },
      ])
    );
  }),
];
