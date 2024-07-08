import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by Relevancec
      </MenuButton>
      <MenuList>
        <MenuItem>Order by Relevance</MenuItem>
        <MenuItem>Order by Popularity</MenuItem>
        <MenuItem>Order by Rating</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>NAme</MenuItem>
        <MenuItem>Releases</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
