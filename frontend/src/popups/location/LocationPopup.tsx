"use client"
import React from 'react'
import { toast } from 'react-toastify'
import '../Popup.css'
const LocationPopup = (
    {
        setShowLocationPopup
    }: {
        setShowLocationPopup: React.Dispatch<React.SetStateAction<boolean>>
    }
) => {

    const [cities, setCities] = React.useState<any[]>([])


    const [selectedCity, setSelectedCity] = React.useState<any>(null)

    const getcities = async () => {
        const indianCities = [
            "Colombo",
            "Gampaha",
            "Kalutara",
            "Kandy",
            "Matale",
            "Nuwara Eliya",
            "Galle",
            "Matara",
            "Hambantota",
            "Jaffna",
            "Kilinochchi",
            "Mannar",
            "Mullaitivu",
            "Vavuniya",
            "Puttalam",
            "Kurunegala",
            "Anuradhapura",
            "Polonnaruwa",
            "Badulla",
            "Monaragala",
            "Ratnapura",
            "Kegalle"
            
        ];

        const cities = indianCities.map((city) => {
            return {
                label: city,
                value: city
            }

        })

        setCities(cities)
    }

    React.useEffect(() => {
        getcities()
    }, [])

    const handleSave = () => {
        // setShowLocationPopup(false)
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/changeCity`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                city: selectedCity
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    // toast(data.message, {
                    //     type: 'success'
                    // })
                    setShowLocationPopup(false)
                    window.location.reload()
                }
            })
            .catch((err) => {
                toast(err.message, {
                    type: 'error'
                })
                console.log(err)
            })
    }

    return (
        <div className='popup-bg'>
            <div className='popup-cont'>
                <select
                    className='select'
                    onChange={(e) => {
                        setSelectedCity(e.target.value)
                    }}
                >
                    <option value="" disabled selected>Select your city</option>
                    {
                        cities.map((city: any) => {
                            return <option key={city.value} value={city.value}>{city.label}</option>
                        })
                    }
                </select>

                <button className='btn'
                    onClick={handleSave}
                >Save</button>
            </div>
        </div>
    )
}

export default LocationPopup