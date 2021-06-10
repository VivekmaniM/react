import './App.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import picture from './Assets/picture.png';
import video_camera from './Assets/video_camera.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        padding: '10px'
    },
    listPadding: {
        padding: '10px 0px 15px 0px'
    },
    name: {
        fontSize: '15px',
        fontWeight: '600',
    },
    listBtn: {
        float: 'right'
    },
    viewBtn: {
        border: '1px solid #382f9c',
        borderRadius: '5px',
        color: '#382f9c',
        fontWeight: 'bold',
        margin: '20px 0px 20px 0px',
        width: '100%'
    },
    listImage: {
        padding: '0px 15px 0px 0px'
    },
    listBtnLite: {
        background: '#f0eff8',
        color: '#382f9c'
    },
    listBtnDark: {
        background: '#382f9c',
        color: '#fff'
    }
}));

function Screenshot() {
    const tableData = [
        {
            name: 'shot_1_attach_1.png',
            src: '',
            type: 'image'
        },
        {
            name: 'shot_1_attach_3.png',
            src: '',
            type: 'image'
        },
        {
            name: 'Screen record_12.mov',
            src: '',
            type: 'video'
        }
    ];

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid xs={12}>
           <h3 className={classes.title}>Screenshots</h3>
        </Grid>
        <Grid xs={12}>
            {tableData.map((value, i) => (
                <div>
                    <List className={classes.listPadding}>
                        <span><img className={classes.listImage} src={value.type == 'image' ? picture : video_camera}></img></span>
                        <span className={classes.name}>
                            {value.name}
                        </span>
                        <span className={classes.listBtn}>
                            <Button size="small" className={ value.type == 'image' ? classes.listBtnLite : classes.listBtnDark}>
                                {value.type == 'image' ? 'View' : 'Play'}
                            </Button>
                        </span>
                    </List>
                    <Divider />
                </div>
            ))}
        </Grid>
        <Grid xs={12}>
            <Button className={classes.viewBtn} size="medium">
                View All
            </Button>
        </Grid>
    </div>
  );
}

export default Screenshot;
