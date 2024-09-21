import connection from '../../../../DB.js'

export async function GET(request, { params }) {
    const cls = parseInt(params.class)
    const sql = 'SELECT * FROM student WHERE class = ?'
    return new Promise((resolve, reject) => {
        connection.query(sql, [cls], (err, results) => {
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
