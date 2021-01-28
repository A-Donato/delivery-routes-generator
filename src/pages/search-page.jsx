import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { STREETS } from '../helpers/streets';


function SeacrhPage() {
    const options = STREETS;
    const [selectedStreets, setSelectedStreets] = React.useState([]);

    const updateSelectedStreets = (newStreetSelected) => {
        setSelectedStreets([newStreetSelected, ...selectedStreets]);
    }

    return (
        <div className='m-4' >
            <br />
            <Autocomplete
                onChange={(event, newValue) => {
                    updateSelectedStreets(newValue);
                }}
                id="controllable-states-demo"
                options={options}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Ingrese Calle" variant="outlined" />}
            />
        </div>
    );
}

export default SeacrhPage;