import fetch from 'node-fetch'

export default async (req, res) => {
    const { query: { code } } = req

    console.log(code)

    const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: 'INSERT_CLIENT_ID',
            client_secret: 'INSERT_CLIENT_SECRET',
            code
        })
    })

    console.log(response)

    const json = await response.text()
    console.log(json)

    res.statusCode = 200
    res.json({ name: 'John Doe' })
}