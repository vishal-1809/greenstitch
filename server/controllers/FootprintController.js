const Footprint = require('../models/FootprintSchema');

module.exports.postData = async (req,res,next) => {
    try {
        const {month, spinning, transportation, carding, heatingCooling} = req.body;
        const vis = await Footprint.create ({
            month,
            spinning,
            transportation,
            carding,
            heatingCooling
        });
        return res.json({ status: true, vis });
    }
    catch (err) {
        next(err);
    }
}

module.exports.getData = async (req,res,next) => {
    try {
        const { mon } = req.params;
        Footprint.findOne({ month: mon })
            .then(vis => {
                if (!vis) {
                    return res.status(422).json({ error: "Not found" });
                }
                else {
                    const {month, spinning, transportation, carding, heatingCooling} = vis;
                    return res.json({ month, spinning, transportation, carding, heatingCooling });
                }
            }).catch(err => {
                return res.status(404).json({ error: "Not found" });
            })
    }
    catch (err) {
        next(err);
    }
}