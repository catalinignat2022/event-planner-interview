const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  app.use(cors());

let elements = [
  {
    id: 1,
    title: 'Example 1',
    description: 'This is the first example',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-01-07'),
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    categories: ['Coding', 'Social'],
    subscribe: 0,
  },
  {
    id: 2,
    title: 'Example 2',
    description: 'This is the second example',
    startDate: new Date('2023-02-01'),
    endDate: new Date('2023-02-14'),
    image: 'https://cdn-images-1.medium.com/max/1000/1*ZU1eWct801yP-QpUJOaI6Q.png',
    categories: ['Social'],
    subscribe: 1,
  },
  {
    id: 3,
    title: 'Example 3',
    description: 'This is the third example',
    startDate: new Date('2023-02-01'),
    endDate: new Date('2023-02-14'),
    image: 'https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png',
    categories: ['Social'],
    subscribe: 0,
  },
  {
    id: 4,
    title: 'Example 4',
    description: 'This is the third example',
    startDate: new Date('2023-02-01'),
    endDate: new Date('2023-02-14'),
    image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*GmMtKznzJ1dS8sSzxzR3ow.png',
    categories: ['Social'],
    subscribe: 1,
  },
];

// GET /elements
app.get('/elements', (req, res) => {
  res.json(elements);
});

// POST /elements
app.post('/elements', (req, res) => {
  const el = elements.find((element) => element.id === req.body.id);
  el.subscribe = el.subscribe === 0 ? 1 : 0;
  res.status(201).json(elements);
});

// Start the server
app.listen(3100, () => {
  console.log('Server is running on port 3100');
});
