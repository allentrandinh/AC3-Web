import React from 'react';

const Explanation = () => {
    return(
        <div className='explanation'>
            <h3>Base Ranking</h3>
            <ul>
                <li>
                    Base Ranking receives information regarding coordinates (longitude and latitude) of potential base and potential conflict sites to calculate the total distance from each potential base to ALL potential conflict sites and rank the bases. 
                </li>
                <li>
                    The importance of each potential conflict site can also be included via the variable "weight", which will be used to multiple to the corresponding distance to that conflict sites. 
                </li>
                <li>
                    For example: if conflict_site_1 has the weight of 1 and conflict_site_2 has the weight of 2 and if distance (base,conflict_site_1) = a miles and (base, conflict_site_2) = b miles then the total distance from base to ALL sites is (a + 2*b) miles.
                </li>
                <li>
                    After submitting the information about base/conflict area, it will show up in the right area. The oder of information is as follows: Type(Base/Area) - Name - Longitude - Latitude - Weight.
                </li>
            </ul>

        </div>
    );
};

export default Explanation;