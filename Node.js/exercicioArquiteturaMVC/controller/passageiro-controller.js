const { Passageiro } = require("../model/passageiro");

exports.createPassageiro = async (req, res) => {
    const {nomePassageiro, codigoVoo} = req.body;
    const codigoVooExistente = new Passageiro ()
    codigoVooExistente.nomePassageiro = nomePassageiro;
    codigoVooExistente.codigoVoo = codigoVoo;
    await codigoVooExistente.save();
    res.json(codigoVooExistente);
    
};

exports.getPassageiro = async (req, res) =>{
    const codigoPassageiro = req.params.codigo;
    const passageiro = await Passageiro.findByPK(codigoPassageiro);
    res.json(passageiro);
};

exports.updatePassageiro = async (req, res) => {
    const codigoPassageiro = req.params.codigo;
    const passageiro = await Passageiro.findByPK(codigoPassageiro);
    const {nomePassageiro, codigoVoo} = req.body;
    passageiro.nome = nome;
    passageiro.codigoVoo = codigo;
    await passageiro.save();
    res.json(passageiro);
};

exports.deletePassageiro = async (req, res) => {
    const codigoPassageiro = req.params.codigo;
    const passageiro = await Passageiro.findByPK(codigoPassageiro);
    await passageiro.destroy();
    res.json({data : 'passageiro deletado com sucesso'});
};