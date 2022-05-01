import CategoryIcon from '@mui/icons-material/Category';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import sidebar from '../../../data/sidebar';

type Props = {
  iconSrc: any;
  activeIconSrc: any;
  text: string;
  active: boolean;
  path: string;
};

const CategoryItem: React.FunctionComponent<Props> = ({
  iconSrc,
  activeIconSrc,
  text,
  active,
  path,
}) => {
  const router = useRouter();

  return (
    <ListItemButton
      sx={{ pl: 4 }}
      selected={active}
      onClick={() => router.push(path)}
    >
      <Box px="0.25rem">
        <Image
          src={active ? activeIconSrc : iconSrc}
          width="30px"
          height="30px"
          alt="icon"
        />
      </Box>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default function CategoriesList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {sidebar.map((item) => (
            <CategoryItem {...item} key={item.text} />
          ))}
        </List>
      </Collapse>
    </List>
  );
}
