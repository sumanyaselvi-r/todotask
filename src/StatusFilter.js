
import React from 'react';

const StatusFilter = ({ value, onChange }) => {
    return (
        <>
            <br></br>
            <label style={{ fontFamily: "Times new Roman", fontSize: "20px", fontWeight: "bold" }}>
                Status Filter:
                <select value={value} onChange={(e) => onChange(e.target.value)}>
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="not-complete">Not Complete</option>
                </select>
            </label>
        </>
    );

};

export default StatusFilter;
