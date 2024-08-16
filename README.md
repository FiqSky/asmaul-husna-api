## Endpoints

| Endpoint                    | Method | Description                                         |
| --------------------------- | ------ | --------------------------------------------------- |
| `/asmaul-husna`             | GET    | Mengambil semua Asma'ul Husna                       |
| `/asmaul-husna/urutan`      | GET    | Mengambil Asma'ul Husna berdasarkan urutan          |

Request:
`http://localhost:3000/asmaul-husna/1`

Response:

```json
{
  "statusCode": 200,
  "data": {
    "urutan": 1,
    "latin": "Ar Rahman",
    "arab": "الرحمن",
    "arti": "Yang Maha Pengasih"
  }
}
```

## Getting Started

- First, clone this repo.
- Install all needed depedencies with `npm install`.
- Because this project are integrated with Vercel, so make sure that you've already installed `@vercel/cli` and connect your project with Vercel.
- Type `node index.js` and see the result in `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
