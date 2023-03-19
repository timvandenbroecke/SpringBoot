import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { withTranslation } from 'react-i18next';

import BelgiumFlag from '../../images/flags/belgium.png';
import ChinaFlag from '../../images/flags/china.png';
import NetherlandsFlag from '../../images/flags/netherlands.png';
import TaiwanFlag from '../../images/flags/taiwan.png';
import BritainFlag from '../../images/flags/great-britain.png';
import FrenchFlag from '../../images/flags/france.png'



function DropDownLang({ t, i18n }) {
  const [lang, setLang] = React.useState('');


  const handleChange = (event) => {
    setLang(event.target.value);
    switch(event.target.value){
      case 0:
        i18n.changeLanguage('en');
  
      break;
      case 1:
        i18n.changeLanguage('nl');
       
      break;
      case 2: 
        i18n.changeLanguage('fr');
      break;
      case 3:
        i18n.changeLanguage('ch');
      break;
    }
  };

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl variant="standard" fullWidth>
        <Select
          labelId="select-label"
          id="simple-select"
          value={lang || 0}
          label={t("LANGUAGE")}
          onChange={handleChange}
        >
          <MenuItem value={0}><img className='lang_flag' src={BritainFlag} alt="britainflag"/> <h3>English</h3> </MenuItem>
          <MenuItem value={1}><img className='lang_flag' src={NetherlandsFlag} alt="netherlandflag"/><img className='lang_flag' src={BelgiumFlag} alt="britainflag"/> <h3>Nederlands</h3></MenuItem>
          <MenuItem value={2}><img className='lang_flag' src={FrenchFlag} alt="frenchflag"/><img className='lang_flag' src={BelgiumFlag} alt="belgium flag"/><h3>Français</h3></MenuItem>
          <MenuItem value={3}><img className='lang_flag' src={TaiwanFlag} alt="taiwanflag"/><img className='lang_flag' src={ChinaFlag} alt="chinaflag"/><h3>汉语</h3></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default  withTranslation('common')(DropDownLang)