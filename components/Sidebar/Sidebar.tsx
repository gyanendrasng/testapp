import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import sidebarData from '../../data/sidebar';
import styles from './Sidebar.module.css';
type ItemProps = {
  iconSrc: any;
  activeIconSrc: any;
  text: string;
  active: boolean;
  path: string;
};

const Item: React.FunctionComponent<ItemProps> = ({
  iconSrc,
  activeIconSrc,
  text,
  active,
  path,
}) => {
  const router = useRouter();

  return (
    <Box
      className={styles.item}
      display="flex"
      alignItems="center"
      height="60px"
      onClick={() => router.push(path)}
    >
      <Box px="1rem">
        <Image
          src={active ? activeIconSrc : iconSrc}
          width="30px"
          height="30px"
          alt="icon"
        />
      </Box>

      <Box
        className={styles.text}
        pr="1rem"
        display="none"
        color={active ? 'var(--white)' : 'var(--text-muted)'}
      >
        {text}
      </Box>
    </Box>
  );
};

const Sidebar: React.FunctionComponent<any> = () => {
  return (
    <Box width="70px">
      <Box bgcolor="var(--primary)" className={styles.sidebar} height="100%">
        <Box height="80px" />
        <Box>
          {sidebarData.map((item) => (
            <Item {...item} key={item?.text} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Sidebar;
