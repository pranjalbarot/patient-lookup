import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../api/api";

function PatientDetails() {

    const { id } = useParams();

    const [patient, setPatient] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {

        async function loadPatient() {

            try {

                const response = await api.get(
                    `/patients/${id}`
                );

                setPatient(response.data);

            } catch (error) {

                setError("Unable to load patient.");
            }
        }

        loadPatient();

    }, [id]);

    if (error) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger">
                    {error}
                </div>
            </div>
        );
    }

    if (!patient) {
        return (
            <div className="container mt-4">
                Loading...
            </div>
        );
    }

    return (
        <div className="container mt-4">

            <h2>Patient Details</h2>

            <div className="card mt-4">

                <div className="card-body">

                    <h4>
                        {patient.firstName} {patient.lastName}
                    </h4>

                    <hr />

                    <p>
                        <strong>Patient ID:</strong>{" "}
                        {patient.patientId}
                    </p>

                    <p>
                        <strong>Date of Birth:</strong>{" "}
                        {patient.dateOfBirth}
                    </p>

                    <p>
                        <strong>Phone:</strong>{" "}
                        {patient.phone}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {patient.email}
                    </p>

                    <p>
                        <strong>Address:</strong>{" "}
                        {patient.address}
                    </p>

                    <p>
                        <strong>City:</strong>{" "}
                        {patient.city}
                    </p>

                    <p>
                        <strong>Province:</strong>{" "}
                        {patient.province}
                    </p>

                    <p>
                        <strong>Postal Code:</strong>{" "}
                        {patient.postalCode}
                    </p>

                    <Link
                        to="/patients"
                        className="btn btn-secondary"
                    >
                        Back to Patients
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default PatientDetails;