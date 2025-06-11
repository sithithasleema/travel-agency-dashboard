// @ts-nocheck

import { Link, NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import {NavItems} from "./index";

import { SidebarComponent } from '@syncfusion/ej2-react-navigations';

const MobileSidebar = () => {

  let sidebar : SidebarComponent;

  const toggleSidebar = () => {
    sidebar.toggle();
  }

  return (
    <div className="mobile-sidebar wrapper" >
      <header>
        <Link to="/">
          <img src="/assets/icons/logo-tran.png" alt="logo" width={60} height={60}/>
        </Link>

        <button onClick={()=> toggleSidebar()}>
            <Menu />
        </button>
      </header>

      <SidebarComponent
        ref={(Sidebar) => sidebar = Sidebar}
        id="mobile-sidebar"
        width={270}
        created={()=> sidebar?.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
       >
      <NavItems handleClick={toggleSidebar}/>
      </SidebarComponent>
    </div>
  );
};
export default MobileSidebar;
