let counter = 0;

export default function handler(request, response) {
  counter++;
  response.setHeader('Content-Type', 'application/json');
  response.status(200).end(JSON.stringify({ count: counter }));
}
