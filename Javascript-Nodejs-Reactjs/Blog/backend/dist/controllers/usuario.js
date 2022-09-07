"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuarios = (req, res) => {
    res.json({
        msg: 'getUsuarios'
    });
};
exports.getUsuario = (req, res) => {
    res.json({
        msg: 'getUsuario'
    });
};
exports.postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postUsuario',
        body
    });
};
exports.putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUsuario',
        body
    });
};
exports.deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuario',
        id
    });
};
//# sourceMappingURL=usuario.js.map