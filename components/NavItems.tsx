import React from 'react';
import { Link, NavLink } from 'react-router';
import { LogOut } from 'lucide-react';
// @ts-ignore
import {sidebarItems} from '~/constants';
import {cn} from '~/lib/utils';


const NavItems = ({handleClick}: {handleClick?: () => void}) => {
  const user = {
    name: "Sithi",
    email: "contact@sithi.com",
    imageUrl: "../assets/images/david.webp"
  }

  return (
   <section className="nav-items">
     <Link to="/">
       <img src="/assets/icons/logo-tran.png" alt="logo" />
     </Link>



     <div className="container">
       <nav>
         {sidebarItems.map(({id, href, icon, label}) => (
           <NavLink to={href} key={id}>
             {({isActive} : {isActive:boolean}) => (
               <div className={cn(
                 'group nav-item',
                 isActive && 'bg-primary-100 text-white'
               )} onClick={handleClick}>
                 <img src={icon} alt={label} className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? `brightness-0 invert` : `text-dark`}`} />

                 {label}</div>
             )}
           </NavLink>
         ))}
       </nav>

       <footer className="nav-footer flex justify-between ">
         <img src={user?.imageUrl || "../assets/images/david.webp" } alt={`${user?.name} image`} />

         <article >
           <h2>{user?.name}</h2>
           <p>{user?.email}</p>
         </article>
         <button onClick={() => {console.log('logout')}} className="cursor-pointer scale-x-[-1]">
           <LogOut className="w-5 h-5" />
         </button>
       </footer>

     </div>

   </section>
  );
};
export default NavItems;
