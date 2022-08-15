const categoryModel = require("./../models/category");

async function getCategoryById(id, status) {
    try {
        let query = { id };
        if (published != null) query.status = status;
        const category = await categoryModel.findOne(query);
        if (!category) {
            throw new Error("category not found");
        }
    } catch(err) {
        throw new Error(err);
    }
}

module.exports = {
    getCategoryById
}