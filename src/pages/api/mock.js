export default function handler(req, res) {
    res.status(200).json({
        "basicData": {
            "photo": "https://d31i9b8skgubvn.cloudfront.net/folder/photos/5cc6258b-3b45-4d19-8d5a-504e1356470c",
            "name": "Pedro Pepito fetch",
            "lastName": "Perez Paez 1",
            "birthDate": "05/10/1992",
            "email": "pedropaez@gmail.com",
            "address": "Calle 67 - 23 21",
            "phone": 3221119988,
            "age": 26,
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    })
}