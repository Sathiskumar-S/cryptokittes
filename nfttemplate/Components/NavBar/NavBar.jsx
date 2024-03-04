import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import ICON
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

// Internal Import
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index';
import { Button } from "../Componentindex";
import images from "../../img";

const NavBar = () => {
  // UseState Components
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      // console.log(btnText);
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
      // console.log("Button Clicked");
    } else if (btnText == "Help Center") {
      // console.log(btnText);
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
      // console.log("Button Clicked");
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
      // console.log("Button Clicked");
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setNotification(false);
      setDiscover(false);
      setHelp(false);

    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt='NFT Market Place Logo' height={100} width={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder='Search NFT' />
              <BsSearch onClick={() => { }} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* End of Left Section  */}

        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* Discover Menu  */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* Help Center Menu  */}
          <div className={Style.navbar_container_right_help}>
            {/* Help Center Menu  */}
            <p onClick={(e) => openMenu(e)}> Help Center </p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Notification  */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={() => openNotification()} />
            {notification && <Notification />}
          </div>

          {/* Create Button Section  */}
          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" />
          </div>

          {/* User Profile  */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image src={images.user1} alt='user profile image' width={40} height={40} onClick={() => openProfile()} className={Style.navbar_container_right_profile} />
              {profile && <Profile />}
            </div>

            {/* Menu Button  */}
            <div className={Style.navbar_container_right_menuBtn}>
              <CgMenuRight className={Style.menuIcon} onClick={() => openSideBar()} />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Component  */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar