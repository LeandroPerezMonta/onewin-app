import { Avatar, Select, SelectItem } from '@nextui-org/react'
import React from 'react'

const countries = [
  { key: "argentina", name: "Arg", flag: "https://flagcdn.com/ar.svg" },
  { key: "venezuela", name: "Ven", flag: "https://flagcdn.com/ve.svg" },
  { key: "brazil", name: "Bra", flag: "https://flagcdn.com/br.svg" },
  { key: "switzerland", name: "Swit", flag: "https://flagcdn.com/ch.svg" },
  { key: "germany", name: "Ger", flag: "https://flagcdn.com/de.svg" },
  { key: "spain", name: "Spa", flag: "https://flagcdn.com/es.svg" },
  { key: "france", name: "Fran", flag: "https://flagcdn.com/fr.svg" },
  { key: "italy", name: "Italy", flag: "https://flagcdn.com/it.svg" },
  { key: "mexico", name: "Mex", flag: "https://flagcdn.com/mx.svg" },
];

export const SelectComponent = () => {
  return (
    <Select
      items={countries}
      aria-label='select'
      labelPlacement="outside"
      defaultSelectedKeys={["spain"]}
      classNames={{
        base: "max-w-[5.5rem]",
        trigger: "!py-0 !px-2 !bg-[#1e283f] !h-[0.1rem]",
        innerWrapper: '!h-[0.1rem]',
        helperWrapper: '!h-[0.1rem]',
        popoverContent: ' w-[7rem]'
      }}
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.key} className="flex items-center gap-2">
            <Avatar
              alt={item.data?.flag}
              className="w-4 h-4"
              src={item.data?.flag}
            />
            <div className="flex text-xs">
              <span>{item.data?.name}</span>
            </div>
          </div>
        ));
      }}
    >
      {(user) => (
        <SelectItem className='text-white' key={user.key} textValue={user.name}>
          <div className="flex gap-2 items-center">
            <Avatar alt={user.name} className="w-5 h-5"  src={user.flag} />
            <div className="flex">
              <span className="text-small">{user.name}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
