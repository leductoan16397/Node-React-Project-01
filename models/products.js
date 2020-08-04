const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArticlesSchema = new Schema({
    title: String,
    body: String,
    author: String,
}, { timestamps: true });

ArticlesSchema.methods.toJSON = function () {
    return {
        _id: this._id,
        title: this.title,
        body: this.body,
        author: this.author,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

mongoose.model('Articles', ArticlesSchema);

// const mongoose = require('mongoose');
// const autoincrement = require('mongoose-sequence')(mongoose);

// const Schema = mongoose.Schema;

// const dataSetSchema = new Schema({
//     dataSetId: { type: Number },
//     name: { type: String, required: true },
//     description: { type: String },
//     projectId: { type: String, required: true },
//     sheetName: { type: String },
//     fileName: { type: String },
//     dataSetDetails: [],
//     numberOfRows: { type: Number },
//     numOfLinked: { type: Number },
//     createdAt: { type: Date, default: Date.now },
//     modifiedAt: { type: Date, default: Date.now },
// });

// dataSetSchema.pre('save', (next) => {
//     next();
// });
// dataSetSchema.plugin(autoincrement, { inc_field: 'dataSetId' });

// module.exports = mongoose.model('dataSets', dataSetSchema);
