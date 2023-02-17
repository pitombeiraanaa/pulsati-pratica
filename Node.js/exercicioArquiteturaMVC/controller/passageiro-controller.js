exports.createPassageiro = async (req, res) => {
    const {nomePassageiro, codigoVoo} = req.body;
    nomePassageiro.nome = nome;
    codigoVoo.codigo = codigo;
    await passageiro.save();
    res.json(passageiro);
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
    passageiro.codigoPassageiro = codigo;
    await passageiro.save();
    res.json(passageiro);
};

exports.deletePassageiro = async (req, res) => {
    const codigoPassageiro = req.params.codigo;
    const passageiro = await Passageiro.findByPK(codigoPassageiro);
    await passageiro.destroy();
    res.json({data : 'passageiro deletado com sucesso'});
};