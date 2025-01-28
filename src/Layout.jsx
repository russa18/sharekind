import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import { Provider } from "@/components/ui/provider";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { ColorModeProvider } from "@/components/ui/color-mode";
import MobileNavbar from "./components/MobileNavbar";

const Layout = () => {
  return (
    <Provider 
    // value={defaultSystem}
    >
      <ColorModeProvider>
        <Flex direction="row" gridTemplateColumns="2fr 10fr">
          <Sidebar />
          <Flex
            direction="column"
            justifyContent="space-between"
            // w="10/12"
            sm={{w:"full"}}
            xl={{ w: "full" }}
            overflowX="hidden"
          >
            <Navbar/>
            <Box
           
              as="main"
              h={{base:"85vh",md:"90vh"}}
              overflowY="auto"
              p="4"
              bgImage="linear-gradient({colors.black}, {colors.gray.700})"
            >
              <Outlet />
            </Box>
            <MobileNavbar/>
            {/* <Footer /> */}
          </Flex>
        </Flex>
      </ColorModeProvider>
    </Provider>
  );
};

export default Layout;
