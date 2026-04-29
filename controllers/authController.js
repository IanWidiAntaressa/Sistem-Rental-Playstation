const bcrypt = require('bcryptjs');
const pool = require('../db');

exports.getLogin = (req, res) => res.render('auth/login');
exports.getRegister = (req, res) => res.render('auth/register');

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM admins WHERE username = $1', [username]);
        if (result.rows.length > 0) {
            const admin = result.rows[0];
            const isMatch = await bcrypt.compare(password, admin.password);
            if (isMatch) {
                req.session.userId = admin.id;
                req.session.username = admin.username;
                return res.redirect('/admin/dashboard');
            }
        }
        res.send('Login Gagal. Cek username/password.');
    } catch (err) { res.status(500).send('Server Error'); }
};

exports.postRegister = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('INSERT INTO admins (username, password) VALUES ($1, $2)', [username, hashedPassword]);
        res.redirect('/auth/login');
    } catch (err) { res.send('Username sudah dipakai.'); }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/auth/login');
};
