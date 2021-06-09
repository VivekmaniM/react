import logo from './Assets/logo.png';
import speedometer from './Assets/speedometer.png';
import graph from './Assets/graph.png';
import timer_white from './Assets/timer_white.png';
import to_do from './Assets/to_do.png';
import bill from './Assets/bill.png';
import folder from './Assets/folder.png';
import help from './Assets/help.png';
import download from './Assets/download.png';
import sidebar_overlay from './Assets/sidebar_overlay.png';
import notification from './Assets/notification.png';
import settings from './Assets/settings.png';
import profile from './Assets/profile.png';
import left_arrow from './Assets/left_arrow.png';

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

import Timesheet from './Timesheet';
import Screenshot from './Screenshot';
import Report from './Report';
import TodoList from './TodoList';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  divider: {
    background: '#bbb8dd',
    height: '3px',
    width: '30px',
    margin: '20px 0px 20px 20px'
  },
  logo: {
    width: '30px',
    padding: '20px'
  },
  listItem: {
    cursor: 'pointer',
    fontSize: '11px',
    padding: '10px 20px 10px 20px'
  },
  menuIcon: {
    width: '19px',
    marginRight: '20px'
  },
  overlayImg: {
    width: '35px'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    background: '#382f9c',
    color: '#fff',
    width: drawerWidth
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1
  },
  btnRight: {
    background: '#e9e8f4',
    color: '#382f9c',
    float: 'right',
    fontWeight: 'bold'
  },
  mainGroup: {
    padding: '20px'
  },
  border: {
    border: '1px solid #dadada'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper,}} anchor="left">
          <img src={logo} className={classes.logo}></img>
          <List>
            <ListItem className={classes.listItem}>
              <img src={speedometer} className={classes.menuIcon}></img>Dashboard
            </ListItem>
            <ListItem className={classes.listItem}>
              <img src={graph} className={classes.menuIcon}></img>Activity
            </ListItem>
            <ListItem className={classes.listItem}>
              <img src={timer_white} className={classes.menuIcon}></img>Timesheet
            </ListItem>

            <Divider className={classes.divider} />
            
            <ListItem className={classes.listItem}>
              <img src={to_do} className={classes.menuIcon}></img>To-Do
            </ListItem>
            <ListItem className={classes.listItem}>
              <img src={bill} className={classes.menuIcon}></img>Invoices
            </ListItem>
            <ListItem className={classes.listItem}>
              <img src={folder} className={classes.menuIcon}></img>Projects
            </ListItem>
           
            <Divider className={classes.divider} />

            <ListItem className={classes.listItem}>
              <img src={help} className={classes.menuIcon}></img>Help
            </ListItem>
            <ListItem className={classes.listItem}>
            <img src={download} className={classes.menuIcon}></img>Download APP
            </ListItem>
          </List>
          <img src={sidebar_overlay} className={classes.overlayImg}></img>
          <div className="drawer-menus">
            <Grid container>
                <Grid item lg={4} md={4} sm={4} xs={4} className="drawer-menu">
                  <Badge color="secondary" badgeContent={3} >
                      <img src={notification} />
                  </Badge>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4} className="drawer-menu">
                  <Badge color="secondary">
                      <img src={settings} />
                  </Badge>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4} className="drawer-menu">
                    <Avatar alt="User" src={profile} className="avatar" />
                </Grid>
            </Grid>
          </div>
      </Drawer>
      <main className={classes.mainGroup}>
         <div class="main-btngrp">
          <ButtonGroup variant="contained" color="default" aria-label="split button">
                <Button>Design Task</Button>
                <Button
                  color="default"
                  size="small"
                >
                  <KeyboardArrowDownIcon />
                </Button>
              </ButtonGroup>
              <Button className={classes.btnRight} size="medium">
                  <AddIcon />Add Project
              </Button>
         </div>
        
          <Grid container>
              <Grid item lg={8} md={8} className="p-15">
                  <Timesheet />
              </Grid>
              <Grid item lg={4} md={4} className="p-15">
                  <Report />
              </Grid>
              <Grid item lg={8} md={8} className="p-15">
                  <TodoList />
              </Grid>
              <Grid item lg={4} md={4} className="p-15">
                  <Screenshot />
              </Grid>
          </Grid>
      </main>
    </div>
  );
}

export default App;
