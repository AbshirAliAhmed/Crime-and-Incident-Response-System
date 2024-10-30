const incidentSchema = new mongoose.Schema({
    typeOfIncident: { type: String, required: true },
    dateAndTime: { type: Date, required: true },
    description: { type: String, required: true },
    evidence: { type: String },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    witnessInfo: {
        name: { type: String },
        phone: { type: String }
    }
});

const Incident = mongoose.model('Incident', incidentSchema);
module.exports = Incident;
