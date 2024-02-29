const mongoose = require('mongoose')

const assetScheme = mongoose.Schema(
    {
        type: {
            type: String,
            required: [true, "Type aset"]
        },
        nama: {
            type: String,
            required: [true, "Masukkan nama aset"]
        },
        alamat: {
            type: String,
            required: [true, "Masukkan alamat"]
        },
        deskripsi: {
            type: String,
            required: [true, "Deskripsi Aset"]
        },
        nilaiawal: {
            type: Number,
            required: false
        },
        nilaipenyusutan: {
            type: Number,
            required: false
        },
        nilaibuku: {
            type: Number,
            required: false
        },
        noToPosted: {
            type: Number,
            required: false
        },
        deprecationmethod: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: false
        },
        kondisi: {
            type: String,
            required: false
        },
        parentId: {
            type: Number,
            required: false
        }
    },
    {
        timestamps: false
    }
)

const Asset = mongoose.model('Asset', assetScheme);

module.exports = Asset;