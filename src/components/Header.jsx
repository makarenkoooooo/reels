// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// const Header = ({ openLoginModal, openRegisterModal }) => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setIsDrawerOpen(open);
//   };

//   return (
//     <AppBar
//       position="fixed" // Меняем на fixed, чтобы убрать отступ сверху
//       elevation={0}
//       sx={{
//         backgroundColor: "#f9fafb", // Нежный светлый фон
//         color: "#1f2937", // Цвет текста
//         borderRadius: "0 0 20px 20px", // Более округлые края сверху
//         boxShadow: "none",
//       }}
//     >
//       <Toolbar sx={{ justifyContent: "space-between", padding: "0 16px" }}>
//         {/* Логотип */}
//         <Typography
//           variant="h6"
//           component={Link}
//           to="/"
//           sx={{
//             textDecoration: "none",
//             color: "#1f2937",
//             fontWeight: 700,
//             fontSize: "24px",
//             transition: "color 0.3s",
//             "&:hover": {
//               color: "#6366f1", // Цвет при наведении
//             },
//           }}
//         >
//           CopyReels
//         </Typography>

//         {/* Кнопки для десктопа */}
//         <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
//           <Button
//             onClick={openLoginModal}
//             sx={{
//               borderRadius: "50px", // Более округлая форма
//               padding: "10px 20px",
//               textTransform: "none",
//               color: "#1f2937",
//               backgroundColor: "#f3f4f6",
//               boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
//               transition: "background-color 0.3s, box-shadow 0.3s",
//               "&:hover": {
//                 backgroundColor: "#e0f2fe",
//               },
//             }}
//           >
//             Войти
//           </Button>
//           <Button
//             onClick={openRegisterModal}
//             sx={{
//               borderRadius: "50px", // Более округлая форма
//               padding: "10px 20px",
//               textTransform: "none",
//               backgroundColor: "#6366f1",
//               color: "#fff",
//               boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
//               transition: "background-color 0.3s, box-shadow 0.3s",
//               "&:hover": {
//                 backgroundColor: "#4f46e5",
//               },
//             }}
//           >
//             Регистрация
//           </Button>
//         </Box>

//         {/* Меню для мобильных устройств */}
//         <Box sx={{ display: { xs: "flex", md: "none" } }}>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer(true)}
//             sx={{
//               backgroundColor: "#fff",
//               borderRadius: "50%", // Полностью круглая кнопка
//               boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
//               "&:hover": {
//                 backgroundColor: "#e0f2fe",
//               },
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Box>
//       </Toolbar>

//       {/* Drawer для мобильного меню */}
//       <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
//         <Box
//           sx={{ width: 250, padding: "16px" }}
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
//           <List>
//             <ListItem button component={Link} to="/about">
//               <ListItemText primary="О нас" />
//             </ListItem>
//             <Divider />
//             <ListItem button onClick={openLoginModal}>
//               <ListItemText primary="Войти" />
//             </ListItem>
//             <ListItem button onClick={openRegisterModal}>
//               <ListItemText primary="Регистрация" />
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ openLoginModal, openRegisterModal }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#f9fafb",
        color: "#1f2937",
        borderRadius: "0 0 20px 20px",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: "0 16px" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "#1f2937",
            fontWeight: 700,
            fontSize: "24px",
            transition: "color 0.3s",
            "&:hover": { color: "#6366f1" },
          }}
        >
          CopyReels
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button
            onClick={openLoginModal}
            sx={{
              borderRadius: "50px",
              padding: "10px 20px",
              textTransform: "none",
              color: "#1f2937",
              backgroundColor: "#f3f4f6",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              transition: "background-color 0.3s, box-shadow 0.3s",
              "&:hover": { backgroundColor: "#e0f2fe" },
            }}
          >
            Войти
          </Button>
          <Button
            onClick={openRegisterModal}
            sx={{
              borderRadius: "50px",
              padding: "10px 20px",
              textTransform: "none",
              backgroundColor: "#6366f1",
              color: "#fff",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              transition: "background-color 0.3s, box-shadow 0.3s",
              "&:hover": { backgroundColor: "#4f46e5" },
            }}
          >
            Регистрация
          </Button>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "50%",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              "&:hover": { backgroundColor: "#e0f2fe" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, padding: "16px" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="О нас" />
            </ListItem>
            <Divider />
            <ListItem button onClick={openLoginModal}>
              <ListItemText primary="Войти" />
            </ListItem>
            <ListItem button onClick={openRegisterModal}>
              <ListItemText primary="Регистрация" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
