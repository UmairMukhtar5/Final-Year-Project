import React, { useEffect } from "react";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ImgMediaCard from "./Card";
import MyChart from "./Youtubechart";


import { NavLink, Redirect } from "react-router-dom";

// rounded image
import ExampleComponent from "react-rounded-image";

import SelectedListItem from "./ListItems";
import { DesktopWindows } from "@material-ui/icons";

// code to get image and username from local storage ...

if (localStorage.getItem("localstoragedata")) {
  var user = JSON.parse(localStorage.getItem("localstoragedata"));
  var image = user.User.profilephoto;
  var username = user.User.username;
  console.log(image);
}

// chatbot 

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Importext COMSATS UNIVERSTY ISLAMABAD
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}



    </Typography>
  );
}

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

  },

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: "#1296BA",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    width: "100%",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    // background: "pink",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    // flexDirection: "column",
    background: "pink",
    height: 600,
    width: "100%",
  },
  fixedHeight: {
    height: 140,
  },
}));

export default function Album(props) {

  useEffect(() => {
    chatbotWatson();
  }, [])


  const chatbotWatson = () => {
    window.loadWatsonAssistantChat({

      integrationID: "69d0ecd7-f1a3-4105-8f26-86a855c6f7ea", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "b5ab8a78-ce5c-45a7-b351-406f9969cede", // The ID of your service instance.


    }).then((instance) => {
      instance.render();
    });
  };


  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="initial"
            noWrap
            className={classes.title}
          >
            IMPORTEXT
          </Typography>

          <Typography
            component="h1"
            variant="h6"
            color="initial"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => {
              localStorage.removeItem("localstoragedata");
              // <Redirect to={{ pathname: "/sign-in" }} />;

              return <Redirect to={{ pathname: "/sign-in" }} />;
              // props.history.push("/sign-in");

              // window.location.reload();
            }}
          >
            <Badge>Logout !</Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* 
//////////////////// till heree we have top har  */}
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <ExampleComponent
            image={image}
            roundedColor="#1296BA"
            imageWidth="90"
            imageHeight="60"
            roundedSize="4"
          />{" "}
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <SelectedListItem></SelectedListItem>
        {/* Side bar contents stars  */}
        {/* <List>{mainListItems} </List> */}
        <Divider />
        {/* <List>{secondaryListItems}</List>{" "} */}
      </Drawer>


      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div style={{ Padding: 10 }} className={classes.container}>
          <Grid container spacing={0}>
            {/* Chart */}
            {/* <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                sddfsdf
                <br></br>
              </Paper>
            </Grid> */}
            {/* Recent Deposits */}
            {/* <Grid item xs={12} md={4} lg={3}> */}
            {/* <Paper className={fixedHeightPaper}>sdfsdfsd</Paper> */}
            {/* </Grid> */}
            {/* Recent  */}
            {/* <Grid item xs={12}> */}
            {/* <Paper className={classes.paper}> */}
            {/* <Paper className={classes.paper}> */}

            {props.children}

            {/* <ImgMediaCard></ImgMediaCard> */}
            {/* </Paper> */}
            {/* </Grid> */}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </div>
      </main>
    </div>
  );
}
