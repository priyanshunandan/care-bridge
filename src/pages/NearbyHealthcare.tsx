import { useState } from "react";

const facilities = [
    {
        type: "HOSPITAL",
        name: "City Care Hospital",
        description:
            "General healthcare · Emergency",
        distance: "1.2 km away",
        icon: "fa-hospital",
    },
    {
        type: "PHARMACY",
        name: "HealthPlus Pharmacy",
        description:
            "Medicines · Health products",
        distance: "0.8 km away",
        icon: "fa-prescription-bottle-medical",
    },
    {
        type: "CLINIC",
        name: "Wellness Family Clinic",
        description:
            "Family medicine · Consultation",
        distance: "2.1 km away",
        icon: "fa-stethoscope",
    },
];

function NearbyHealthcare() {
    const [search, setSearch] = useState("");

    const filteredFacilities =
        facilities.filter((facility) =>
            facility.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    const useLocation = () => {
        if (!navigator.geolocation) {
            alert(
                "Geolocation is not supported by your browser."
            );
            return;
        }

        navigator.geolocation.getCurrentPosition(
            () =>
                alert(
                    "Location access successful! Nearby facilities will be based on your location in the backend version."
                ),
            () =>
                alert(
                    "Unable to access your location."
                )
        );
    };

    return (
        <>
            <div className="section-top">
                <div>
                    <span className="panel-label">
                        HEALTHCARE NEAR YOU
                    </span>

                    <h1>Nearby Healthcare</h1>

                    <p>
                        Find healthcare facilities around you.
                    </p>
                </div>

                <button
                    className="secondary-btn"
                    onClick={useLocation}
                >
                    <i className="fa-solid fa-location-crosshairs" />
                    Use my location
                </button>
            </div>

            <div className="nearby-search">
                <i className="fa-solid fa-magnifying-glass" />

                <input
                    type="text"
                    placeholder="Search hospitals, clinics, pharmacies..."
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                />
            </div>

            <div className="nearby-grid">
                {filteredFacilities.map((facility) => (
                    <div
                        className="nearby-card"
                        key={facility.name}
                    >
                        <div className="nearby-icon hospital">
                            <i
                                className={`fa-solid ${facility.icon}`}
                            />
                        </div>

                        <div className="nearby-info">
                            <span className="facility-type">
                                {facility.type}
                            </span>

                            <h3>{facility.name}</h3>

                            <p>{facility.description}</p>

                            <span className="distance">
                                {facility.distance}
                            </span>
                        </div>

                        <button className="nearby-arrow">
                            <i className="fa-solid fa-arrow-right" />
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default NearbyHealthcare;