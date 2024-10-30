const officerSchema = new mongoose.Schema({
    badgeNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    rank: { type: String },
    contactNumber: { type: String, required: true },
    // assignedIncidents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Incident' }]
});

const Officer = mongoose.model('Officer', officerSchema);
module.exports = Officer;
