import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../api/api";
import { useAuth } from "../context/AuthContext";

function PatientList() {

    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    const { role } = useAuth();

    async function loadPatients() {

        try {

            const response = await api.get("/patients");

            setPatients(response.data);

        } catch (error) {

            setError("Unable to load patients.");
        }
    }

    useEffect(() => {
        loadPatients();
    }, []);

    async function handleSearch(event) {

        event.preventDefault();

        try {

            if (!search.trim()) {
                loadPatients();
                return;
            }

            const response = await api.get(
                `/patients/search?name=${encodeURIComponent(search)}`
            );

            setPatients(response.data);

        } catch (error) {

            setError("Search failed.");
        }
    }

    async function deletePatient(id) {

        if (!window.confirm(
            "Are you sure you want to delete this patient?"
        )) {
            return;
        }

        try {

            await api.delete(`/patients/${id}`);

            loadPatients();

        } catch (error) {

            setError("Unable to delete patient.");
        }
    }

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>Patients</h2>

                <Link
                    to="/patients/new"
                    className="btn btn-success"
                >
                    Add Patient
                </Link>

            </div>

            {error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )}

            <form
                className="row mb-4"
                onSubmit={handleSearch}
            >

                <div className="col-md-8">

                    <input
                        className="form-control"
                        placeholder="Search by first or last name"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

                <div className="col-md-2">

                    <button
                        className="btn btn-primary w-100"
                        type="submit"
                    >
                        Search
                    </button>

                </div>

                <div className="col-md-2">

                    <button
                        className="btn btn-secondary w-100"
                        type="button"
                        onClick={() => {
                            setSearch("");
                            loadPatients();
                        }}
                    >
                        Clear
                    </button>

                </div>

            </form>

            <div className="table-responsive">

                <table className="table table-striped table-hover">

                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {patients.map((patient) => (

                            <tr key={patient.patientId}>

                                <td>
                                    {patient.patientId}
                                </td>

                                <td>
                                    {patient.firstName}
                                </td>

                                <td>
                                    {patient.lastName}
                                </td>

                                <td>
                                    {patient.dateOfBirth}
                                </td>

                                <td>

                                    <Link
                                        to={`/patients/${patient.patientId}`}
                                        className="btn btn-sm btn-info me-2"
                                    >
                                        View
                                    </Link>

                                    <Link
                                        to={`/patients/${patient.patientId}/edit`}
                                        className="btn btn-sm btn-warning me-2"
                                    >
                                        Edit
                                    </Link>

                                    {role === "ADMIN" && (
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() =>
                                                deletePatient(
                                                    patient.patientId
                                                )
                                            }
                                        >
                                            Delete
                                        </button>
                                    )}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default PatientList;