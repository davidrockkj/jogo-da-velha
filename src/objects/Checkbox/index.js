import React from 'react'
import './styles.css'

import Input from '../Input'
import Label from '../Label'

const Checkbox = ({ id='', value='', content='' }) => (
  <>
    <Input id={id} type='checkbox' value={value} />
    <Label htmlFor={id} content={content} />
  </>
);

export default Checkbox;