import connection from '../../../DB.js'

export async function GET(request, { params }) {
    const id = parseInt(params.id)
    const sql = 'SELECT * FROM student WHERE id = ?'
    return new Promise((resolve, reject) => {
        connection.query(sql, [id], (err, results) => {
            if (err) {
                console.error('Error fetching:', err);
                reject(err);
            } else {
                resolve(results);
            }
        });
    })
        .then(students => {
            return Response.json(students);
        })
        .catch(error => {
            console.error('Error :', error);
            return new Response('Server Error', { status: 500 });
        });
}
