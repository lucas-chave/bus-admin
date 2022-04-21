import cn from 'classnames';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';

import { LinksNav } from "./links";

interface Props {
  data: LinksNav;
};

export const SubMenu = ({ data }: Props) => {
  const location = useLocation();

  const url = location.pathname.split('/')[location.pathname.split('/').length - 1];

  return (
    <Link to={`/dashboard/${data.href}`} className={cn({
      ['linkActive']: url === data.href, linkMenu: true,
    })}>
        <img src={data.icon.src} alt={data.icon.alt} style={{ minWidth: data.icon.width, maxWidth: data.icon.width, minHeight: data.icon.height, maxHeight: data.icon.height }} />
        {data.label}
    </Link>
  );
};
