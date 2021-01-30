import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { STREETS } from '../helpers/streets';


function SeacrhPage() {
    const options = STREETS;
    const [selectedStreets, setSelectedStreets] = React.useState([]);
    const [currentStreet, setCurrentStreet] = React.useState('');
    const [currentNumber, setCurrentNumber] = React.useState(0);

    const updateSelectedStreets = (newStreetSelected) => {
        setSelectedStreets([newStreetSelected, ...selectedStreets]);
    }

    const handleSetCurrentStreet = (event, value) => {
        setCurrentStreet(value);
    }

    const handleSetCurrentNumber = (event) => {
        setCurrentNumber(event.target.value)
    }

    const saveNewNode = () => {
        if (currentStreet && currentNumber) {
            const streetName = currentStreet.split(',')[0];
            updateSelectedStreets(`${streetName} ${currentNumber}`);
        }

    }
    
    const showCurrentState = () => {
        console.log('tenemos esto', selectedStreets);
    }

    return (
        <div className='h-full flex justify-center pt-20-porc' >
            <br />
            <Autocomplete
                className='w-2/4'
                id="autocomplete-street"
                options={options}
                noOptionsText='No se encontró calle' 
                onChange={(event, value) => handleSetCurrentStreet(event, value)}
                renderInput={(params) => <TextField {...params} label="Ingrese Calle" variant="outlined" />}
            />
            <TextField
              id="number"
              label="Ingrese altura"
              variant="outlined"
              onChange={e => handleSetCurrentNumber(e)}
            />
            <IconButton onClick={ e => saveNewNode()} className="max-h-4">
              <AddIcon />
            </IconButton>
            <IconButton onClick={ e => showCurrentState()} className="max-h-4">
              <VisibilityIcon />
            </IconButton>
        </div>
    );
}

export default SeacrhPage;