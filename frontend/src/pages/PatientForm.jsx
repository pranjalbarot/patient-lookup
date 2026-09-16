import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../api/api";

function PatientForm() {

    const { id } = useParams();
    const navigate = useNavigate();

    const editing = !!id;

    const [patient, setPatient] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        province: "",
        postalCode: ""
    });

    const [error, setError] = useState("");

    useEffect(() => {

        if (editing) {
            loadPatient();
        }

    }, [id]);

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

    function handleChange(event) {

        setPatient({
            ...patient,
            [event.target.name]: event.target.value
        });
    }

    async function handleSubmit(event) {

        event.preventDefault();
        setError("");

        try {

            if (editing) {

                await api.put(
                    `/patients/${id}`,
                    patient
                );

            } else {

                await api.post(
                    "/patients",
                    patient
                );
            }

            navigate("/patients");

        } catch (error) {

            setError(
                "Unable to save patient. Please check the information."
            );
        }
    }

    return (
        <div className="container mt-4">

            <h2 className="mb-4">
                {editing
                    ? "Update Patient"
                    : "Create Patient"}
            </h2>

            {error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>

                <div className="row">

                    <div className="col-md-6 mb-3">

                        <label className="form-label">
                            First Name
                        </label>

                        <input
                            name="firstName"
                            className="form-control"
                            value={patient.firstName}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <label className="form-label">
                            Last Name
                        </label>

                        <input
                            name="lastName"
                            className="form-control"
                            value={patient.lastName}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <label className="form-label">
                            Date of Birth
                        </label>

                        <input
                            type="date"
                            name="dateOfBirth"
                            className="form-control"
                            value={patient.dateOfBirth}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <label className="form-label">
                            Phone
                        </label>

                        <input
                            name="phone"
                            className="form-control"
                            value={patient.phone || ""}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={patient.email || ""}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <label className="form-label">
                            Address
                        </label>

                        <input
                            name="address"
                            className="form-control"
                            value={patient.address || ""}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-4 mb-3">

                        <label className="form-label">
                            City
                        </label>

                        <input
                            name="city"
                            className="form-control"
                            value={patient.city || ""}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-4 mb-3">

                        <label className="form-label">
                            Province
                        </label>

                        <input
                            name="province"
                            className="form-control"
                            value={patient.province || ""}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-4 mb-3">

                        <label className="form-label">
                            Postal Code
                        </label>

                        <input
                            name="postalCode"
                            className="form-control"
                            value={patient.postalCode || ""}
                            onChange={handleChange}
                        />

                    </div>

                </div>

                <button
                    type="submit"
                    className="btn btn-primary me-2"
                >
                    {editing ? "Update Patient" : "Create Patient"}
                </button>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/patients")}
                >
                    Cancel
                </button>

            </form>

        </div>
    );
}

export default PatientForm;