import * as Styles from './styles';

import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  isActive?: boolean;
  children: string;
};

export function NavLink({ to, isActive = false, children }: NavLinkProps) {
  return (
    <Styles.Container isActive={isActive}>
      <Link to={to}>{children}</Link>
    </Styles.Container>
  );
}
