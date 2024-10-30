const assignIncidentSchema = new mongoose.Schema({
    incident_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Incident', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const AssignIncident = mongoose.model('AssignIncident', assignIncidentSchema);
module.exports = AssignIncident;
