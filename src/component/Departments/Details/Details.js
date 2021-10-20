import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';


const Details = () => {
    const { departmentId } = useParams();

    // const [departmentDetails, setDepartmentDetails] = useState([]);
    const [singleDepartment, setSingleDepartment] = useState({});

    useEffect(() => {
        fetch('/departments.json')
            .then(res => res.json())
            .then(data => {
                const foundDepartment = data.find(department => department.id == departmentId)
                setSingleDepartment(foundDepartment);
                console.log(foundDepartment);
            })
    }, [departmentId]);


    return (
        <div>
            <div>
                <div class="card mx-auto mb-5 mt-5">
                    <img src={singleDepartment.img} class="details-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-info">{singleDepartment.name}</h5>
                        <p class="card-text">{singleDepartment.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;