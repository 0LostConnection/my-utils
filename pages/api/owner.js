import { DatabaseHandler } from '../../utils/Database'

function owner(request, response) {
    let Database = {}

    switch (request.method) {
        case 'GET':
            Database = new DatabaseHandler(`${process.cwd()}/database/owner.json`)
            response.status(200).send(Database.data)
            break

        case 'POST':
            Database = new DatabaseHandler(`${process.cwd()}/database/owner.json`)

            try {
                Database.write(Database.data.username = request.body.username)
                response.status(200).send({ message: 'Owner username changed successfully!' })
            } catch (error) {
                response.status(500).send({ message: `An error occurred!` })
            }
            break

        default:
            return response.status(405).send({ message: 'Only GET and POST requests are allowed!' })
    }
}

export default owner