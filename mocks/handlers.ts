import { rest } from 'msw';

export const handlers = [
  rest.get(`${process.env.BASE_URL}/api/search`, (req, res, ctx) => {
    const query = req.url.searchParams.get('query');

    return res(
      ctx.status(200),
      ctx.json({
        query,
        data: [
          {
            id: '61ad1cd5991e5043a4a63264',
            _id: '61ad1cd5991e5043a4a63264',
            color: 'black',
            qty: 1,
            brand: 'roccat',
            connectivity: 'wired',
            type: 'keyboard',
            variant: 'casual',
            price: 199.99,
            name: 'Vulcan Pro',
            image: {
              placeholder:
                'https://res.cloudinary.com/chimson/image/upload/f_webp,e_blur:1000/v1639047869/glowykeys/roccat_vulcan_pro.png',
              original:
                'https://res.cloudinary.com/chimson/image/upload/w_800,h_600,c_fit,g_center/v1639318445/glowykeys/roccat_vulcan.png',
              originalPlaceholder:
                'https://res.cloudinary.com/chimson/image/upload/w_800,h_600,f_webp,e_blur:1000/v1639319946/glowykeys/roccat_vulcan.png',
              thumbnail: 'https://res.cloudinary.com/chimson/image/upload/v1639047869/glowykeys/roccat_vulcan_pro.png',
            },
            description: [
              'Award Winning Design',
              '100 million keystroke life-cycle',
              '32-bit ARM Cortex-M0 based processor',
            ],
          },
        ],
      })
    );
  }),
];
