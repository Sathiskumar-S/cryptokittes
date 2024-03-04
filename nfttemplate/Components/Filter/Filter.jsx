import React, {useState} from 'react';
import { FaFilter, FaAngleDown, FaAngleUp, FaWallet, FaMusic, FaVideo, FaImage, FaUserAlt} from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

//Internal Import
import Style from "./Filter.module.css";
import images from "../../img";

const Filter = () => {
  const [filter, setFilter] = useState(true);  
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);

  //Function Section
  const openFilter = () => {
    if(!filter){
        setFilter(true);
    } else{
        setFilter(false);
    }
  }

  const openImage = () => {
    if(!image){
        setImage(true);
    } else{
        setImage(false);
    }
  }

  const openVideo = () => {
    if(!video){
        setVideo(true);
    } else{
        setVideo(false);
    }
  }

  const openMusic = () => {
    if(!music){
        setMusic(true);
    } else{
        setMusic(false);
    }
  }
  return (
    <div className={Style.filter}>
        <div className={Style.filter_box}>
            <div className={Style.filter_box_left}>
                <button onClick={() => {}}>NFTs</button>
                <button onClick={() => {}}>Arts</button>
                <button onClick={() => {}}>Musics</button>
                <button onClick={() => {}}>Sports</button>
                <button onClick={() => {}}>Photography</button>
            </div>

            <div className={Style.filter_box_right}>
                <div className={Style.filter_box_right_box} onClick={() => openFilter()}>
                    <FaFilter />
                    <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
                </div>
            </div>
        </div>
        {
            filter && (
                <div className={Style.filter_box_items}>
                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item}>
                            <FaWallet /> <span>10 ETH</span>
                            <AiFillCloseCircle />
                        </div>
                    </div>

                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item_trans} onClick={() => openImage()}>
                            <FaImage />
                            {
                                image ? <AiFillCloseCircle /> : <TiTick />
                            }
                        </div>
                    </div>

                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item_trans} onClick={() => openVideo()}>
                            <FaVideo /> <small>Videos</small>
                            {
                                video ? <AiFillCloseCircle /> : <TiTick />
                            }
                        </div>
                    </div>

                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item_trans} onClick={() => openMusic()}>
                            <FaMusic /> <small>Musics</small>
                            {
                                music ? <AiFillCloseCircle /> : <TiTick />
                            }
                        </div>
                    </div>

                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item_trans}>
                            <FaUserAlt /> <small>Verified</small>
                            <MdVerified />
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  );
};

export default Filter