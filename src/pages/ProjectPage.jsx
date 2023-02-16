import React, { Fragment, useState } from "react";
import {
  Toolbar,
  Box,
  CssBaseline,
  IconButton,
  Typography,
  Avatar,
  Divider,
  List,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Container,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/material/styles";
import { MainListItems, SecondaryListItems } from "../components/listItems";
import IsConfirm from "../components/IsConfirm";
import Title from "../components/title";
import ListItemButton from "@mui/material/ListItemButton";
import logout from "../features/logout";

function createData(id, date, code, name, manager, description, status) {
  return { id, date, code, name, manager, description, status };
}

const rows = [
  createData(
    0,
    "09 Feb, 2023",
    "DGD201",
    "PARP7",
    "고성민",
    "DTI-Platform_양재 연구소",
    "완료"
  ),
  createData(
    1,
    "02 Feb, 2023",
    "DGD201",
    "POSTN",
    "김대승",
    "DTI-Platform_양재 연구소",
    "진행"
  ),
  createData(
    2,
    "27 Jan, 2023",
    "DGD201",
    "FGFR1",
    "김태묵",
    "DTI-Platform_양재 연구소",
    "완료"
  ),
  createData(
    3,
    "21 Jan, 2023",
    "DGD201",
    "TLR8",
    "임호랑",
    "DTI-Platform_양재 연구소",
    "완료"
  ),
  createData(
    4,
    "14 Jan, 2023",
    "DGD201",
    "IDears",
    "김지환",
    "DTI-Platform_양재 연구소",
    "진행"
  ),
  // createData(
  //   3,
  //   "21 Dec, 2022",
  //   "DGD201",
  //   "DTI-Pair",
  //   "zinc15_chemspace_instock_chemdiv_instock_211021.csv, drugbank_FDA_approved_20221007.csv",
  //   "None"
  // ),
  // createData(
  //   4,
  //   "14 Nov, 2022",
  //   "DGD201",
  //   "DTI-Protein",
  //   "zinc15_chemspace_instock_chemdiv_instock_211021.csv",
  //   "None",
  //   "Done"
  // ),
];

const drawerWidth = 220;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const settings = [
  <ListItemButton href="/profile">Profile</ListItemButton>,
  <ListItemButton
    onClick={() => {
      logout();
    }}
  >
    Logout
  </ListItemButton>,
];

export default function ProjectPage() {
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  // const [projectName, setProjectName] = useState("");
  // const [description, setDescription] = useState("");
  // const [status, setStatus] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // const onChangeProjectName = (event) => {
  //   setProjectName(event.target.value);
  // };

  // const onChangeDescription = (event) => {
  //   setDescription(event.target.value);
  // };

  // const onChangeStatus = (event) => {
  //   setStatus(event.target.value);
  // };
  const onCreateProject = (event) => {
    event.preventDefault();
    // axios.post("http://127.0.0.1:8000/project/",
    // )
  };

  // 유효성 검사(인가된 유저인지)
  IsConfirm();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Project
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="avatar"
                // src="https://images.unsplash.com/photo-1672006089278-061e36de22e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80"
              />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        {/* 좌측 NavBar */}
        <List component="nav">
          <MainListItems />
          <Divider sx={{ my: 1 }} />
          <SecondaryListItems />
        </List>
        {/* 좌측 NavBar 끝 */}
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Title>Project List</Title>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Code</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>PM</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        {/* code, name, manager, description, status */}
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.code}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.manager}</TableCell>
                        <TableCell>{row.description}</TableCell>
                        <TableCell>{row.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more jobs
      </Link> */}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
