function hello(request, response) {
    switch (request.method) {
        case 'GET':
            response.status(200).send('Hello World!')
            break

        default:
            return response.status(405).send('Only GET requests are allowed!')
    }
}

export default hello