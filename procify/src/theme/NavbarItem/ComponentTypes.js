import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import AccessNavItem from '@site/src/components/AccessNavItem';

// Registers {type: 'custom-accessLogout'} for the navbar (see docusaurus.config.js).
export default {
  ...ComponentTypes,
  'custom-accessLogout': AccessNavItem,
};
