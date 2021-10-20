import React, { useEffect, useState } from 'react';
import Department from '../Department/Department';
import './Departments.css';

const Departments = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch('departments.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])
    return (
        <>
            <div>
                <h1 className="text-center text-success m-4"><u>Our Departments</u></h1>
            </div>
            <div id="departments" className="departments-container mt-5 mb-5">
                {
                    departments.map(department => <Department
                        key={department.id}
                        department={department}
                    ></Department>)

                }
            </div>
        </>
    );
};

export default Departments;