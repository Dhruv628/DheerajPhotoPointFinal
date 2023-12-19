"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../../Navbar/page";
import Footer from "../../Footer";
import { useDispatch, useSelector } from "react-redux";
import { inititalizePhotography } from "@/app/redux/actions/photographyReducerAction";
import SettingPopover from "./SettingsPopover";
import CreateFolderModal from "./CreateFolderModal";
import Photos from "@/app/components/Services/Photography/Photos";
import Loader from "../../Loader/Loader";
import { motion } from 'framer-motion';

const isLoggedIn =
  typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

console.log(isLoggedIn);

const Photography = () => {
  const [folderName, setFolderName] = useState(0);
  const [loading, setloading] = useState(false);
  const photos = useSelector((state) => (state as any).photosReducer?.photos);
  const dispatch = useDispatch();
  const [lastIndex, setlastIndex] = useState(0);

  useEffect(() => {

    const fetchPhotosForInitialization = async () => {
          setloading(true);
      try {
        const response = await fetch("/api/routes/Photo/PhotoFolder/FindAll", {
          method: "GET",
        });
        const resPhotos = await response.json();

        console.log(resPhotos);
        if (
          Array.isArray(resPhotos.photoFolder) &&
          resPhotos.photoFolder.length > 0
        ) {
          setlastIndex(resPhotos.photoFolder.length);
          dispatch(inititalizePhotography(resPhotos.photoFolder));
      
        }
      } catch (error) {
        console.error("Error fetching photos:", error);;
      }
      finally{
        setloading(false)
      }
    };
    fetchPhotosForInitialization();
  }, []);

  return !loading ? (
    <div> 
     <NavBar></NavBar>
      <div className="bg-white text-black py-6  min-h-[100vh]">      
      <motion.h1
      className="font-sans flex justify-center text-4xl md:text-5xl font-bold tracking-wide"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Photography
    </motion.h1>
        {/* Header  */}
        <div className="flex flex-col md:flex-row justify-between items-center px-2 py-8">
          <div className="mb-4 md:mb-0"></div>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 py-4 overflow-x-auto lg:text-sm xl:text-base text-[0.8rem] whitespace-nowrap mx-5 space-x-4 md:space-x-6 list-none font-light">
            {(photos as any).length > 0
              ? photos.map((e: any, i: any) => {
                  return (
                    <div
                      className="mb-4 md:mb-0 hover:cursor-pointer"
                      key={i + 69}
                      onClick={() => {
                        setFolderName(i);
                      }}
                    >
                      <div className="flex items-center gap-1 md:gap-2">
                        <div
                          className={`hover:text-blue-400 uppercase transition ${
                            folderName === i
                              ? "border-b border-blue-400 text-blue-400"
                              : ""
                          }`}
                        >
                          {e.name}
                        </div>
                        <div className="" onClick={() => setFolderName(i)}>
                          {isLoggedIn && (
                            <SettingPopover
                              lastIndex={photos?.length}
                              setloading={setloading}
                              index={i}
                              fId={e._id}
                              setFoldername={setFolderName}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="md:pr-6 block lg:hidden hover:scale-[1.05] transition">
            {isLoggedIn && <CreateFolderModal h={20} w={20} />}
          </div>
          <div className="pr-6 hidden lg:block hover:scale-[1.05] transition">
            {isLoggedIn && <CreateFolderModal h={35} w={35} />}
          </div>
        </div>
        {/* Photos  */}
        <Photos photos={photos} folderName={folderName} />
        {/* Footer */}
       
      </div>
      <Footer />
    </div>
  ) : (
    <div className="h-full bg-white">
      <Loader />
    </div>
  );
};

export default Photography;
