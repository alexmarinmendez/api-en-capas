export function auth(req, res, next) {
    if (req.header('secret') === 'VictoriaSecret') {
        next()
    } else {
        res.status(401).json({ error: 'No estas autorizado'})
    }
}