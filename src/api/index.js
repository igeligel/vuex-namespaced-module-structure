const fetchMessages = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: 'message-a7fe282a-bcb3-47a6-b746-e5f41fc2ea66',
        author: 'Robert',
        content: 'This is an awesome architecture',
        time: '2017-10-21T09:46:19+00:00',
        points: 5,
        reactions: [],
      },
      {
        id: 'message-192a2e4d-1203-49b9-bd39-09710e6075e5',
        author: 'Anna',
        content: 'Yeah i agree',
        time: '2017-10-21T09:46:25+00:00',
        points: 0,
        reactions: [],
      },
    ]);
  }, 500);
});

const fetchProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: 'product-18b9a98e-812d-4627-95e0-994245a137ee',
        type: 'shoe',
        brand: 'adidas Originals',
        model: 'PW TENNIS HU - Sneaker low',
      },
      {
        id: 'product-4eaf41ba-0632-4d51-9a11-7921ea819e0f',
        type: 'shoe',
        brand: 'Vans',
        model: 'OLD SKOOL - skate shoe',
      },
      {
        id: 'product-cc2bfba2-207e-49ba-b942-3c79c24d6665',
        type: 'shoe',
        brand: 'adidas Originals',
        model: 'TUBULAR SHADOW - Sneaker low',
      },
      {
        id: 'product-5ccca7c3-2bef-4c9e-bb4a-cffc2534b217',
        type: 'shoe',
        brand: 'Nike SB',
        model: 'STEFAN JANOSKI MAX - Sneaker low',
      },
    ]);
  }, 750);
});

export { fetchMessages, fetchProducts };
