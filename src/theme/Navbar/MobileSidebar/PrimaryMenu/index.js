import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();
  return (
    <>
      <ul className="menu__list">
        {items.filter(item => item.position === 'left').map((item, i) => (
          <NavbarItem
            mobile
            {...item}
            onClick={() => mobileSidebar.toggle()}
            key={i}
          />
        ))}
      </ul>
      <div className='mobile_nav_search'>
        <NavbarItem
          mobile
          {...items.at(-2)}
          onClick={() => mobileSidebar.toggle()}
        />
      </div>
      <div className='mobile_nav_btn_container'>
        <NavbarItem
          mobile
          {...items.at(-1)}
          onClick={() => mobileSidebar.toggle()}
        />
      </div>
    </>
  );
}