import { LayoutGroup, motion } from "framer-motion";
import { FunctionComponent, useState } from "react";
import navPages from "./navPages";
import NavItem from "./NavItem";
import { useNavContext } from "./NavContext";
import { useRouter } from "next/router";

const Navbar: FunctionComponent = () => {
  const router = useRouter()
  
  const path = router.asPath

  const [clickedPage, setClickPage] = useState(navPages.filter((e: any) => "/" + path.split('/')[1] === e.href)[0].name);

  
  // const {page} = useNavContext()
  return (
    <>
      <div className="flex md:hidden h-full items-center justify-evenly py-3 shadow-[0_-4px_20px_0_rgba(0,0,0,0.07)]">
        <LayoutGroup id="navLayoutGroupe">
          {navPages.map(({ name, icon, href }, index) => (
            <NavItem
              layoutId={index + ""}
              key={index}
              text={name}
              isSeleceted={clickedPage === name}
              icon={icon}
              href={href}
              setClickedPage={setClickPage}
            />
          ))}
        </LayoutGroup>
      </div>
    </>
  );
};

export default Navbar;
