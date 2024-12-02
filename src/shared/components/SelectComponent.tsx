import { Avatar, Select, SelectItem } from '@nextui-org/react'
import React from 'react'

const countries = [
  { key: "argentina", name: "Argentina", flag: "https://flagcdn.com/ar.svg" },
  { key: "venezuela", name: "Venezuela", flag: "https://flagcdn.com/ve.svg" },
  { key: "brazil", name: "Brazil", flag: "https://flagcdn.com/br.svg" },
  { key: "switzerland", name: "Switzerland", flag: "https://flagcdn.com/ch.svg" },
  { key: "germany", name: "Germany", flag: "https://flagcdn.com/de.svg" },
  { key: "spain", name: "Spain", flag: "https://flagcdn.com/es.svg" },
  { key: "france", name: "France", flag: "https://flagcdn.com/fr.svg" },
  { key: "italy", name: "Italy", flag: "https://flagcdn.com/it.svg" },
  { key: "mexico", name: "Mexico", flag: "https://flagcdn.com/mx.svg" },
];

export const SelectComponent = () => {
  return (
    <Select className="max-w-xs" label="Select country" size='sm'>
      {countries.map((country) => (
        <SelectItem
          key={country.key}
          startContent={
            <Avatar alt={country.name} className="w-6 h-6" src={country.flag} />
          }
        >
          {country.name}
        </SelectItem>
      ))}
    </Select>
  );
}
