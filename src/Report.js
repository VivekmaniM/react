import './App.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//Images
import pdf from './Assets/pdf.png';
import graph from './Assets/graph.png';
import timer_blue from './Assets/timer_blue.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        padding: '10px'
    },
    content: {
        display: 'inline-block',
    },
    pullRight: {
        float: 'right'
    },
    paperOne: {
        background: '#382f9c',
        borderRadius: '10px',
        margin: '10px 0px 20px 0px',
        padding: '10px'
    },
    paperTwo: {
        border: '1px solid #e3e3e3',
        background: '#f4f4f4',
        borderRadius: '10px',
        margin: '10px 0px 20px 0px',
        padding: '10px'
    },
    reportOneTitle: {
        color: '#b2afd8',
        display: 'block',
        fontSize: '13px',
        fontWeight: '600'
    },
    reportOneValue: {
        color: '#fff',
        display: 'block',
        fontWeight: '700',
        margin: '5px 0px 5px 0px'
    },
    reportTwoTitle: {
        color: '#999999',
        display: 'block',
        fontSize: '13px',
        fontWeight: '600'
    },
    reportTwoValue: {
        color: '#000000',
        display: 'block',
        fontWeight: '700',
        margin: '5px 0px 5px 0px'
    },
    viewBtn: {
        border: '1px solid #382f9c',
        borderRadius: '5px',
        color: '#382f9c',
        fontWeight: 'bold',
        margin: '20px 0px 20px 0px',
        width: '100%'
    },
    rptBtnGreen: {
        background: '#39c084',
        color: '#fff'
    },
    rptBtnRed: {
        background: '#eecfcf',
        color: '#f42525'
    },
    rptBtnGraph: {
        background: '#534ba9',
        color: '#fff',
        padding: '20px'
    },
    rptBtnPower: {
        background: '#fff',
        border: '1px solid #e3e3e3',
        color: '#000000',
        padding: '20px'
    }
}));

function Report() {
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
           <h3 className="report-title">Report</h3>
        </Grid>
        <Grid xs={12}>
            <Paper className={classes.paperOne} elevation={0}>
                <Grid container>
                    <Grid item lg={3} xs={3} className={classes.content} >
                        <Button className={classes.rptBtnGraph} size="large">
                            <img src={graph} />
                        </Button>
                    </Grid>
                    <Grid item lg={6} xs={6} className={classes.content}>
                        <span className={classes.reportOneTitle}>WEEKLY ACTIVITY</span>
                        <span className={classes.reportOneValue}>52%</span>
                    </Grid>
                    <Grid item lg={3} xs={3} className={classes.content}>
                        <Button className={classes.rptBtnGreen} size="small">
                            <ArrowDropUpIcon />17%
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paperTwo} elevation={0}>
                <Grid container>
                    <Grid item lg={3} xs={3} className={classes.content}>
                        <Button className={classes.rptBtnPower} size="large">
                            <img src={timer_blue} />
                        </Button> 
                    </Grid>
                    <Grid item lg={6} xs={6} className={classes.content}>
                        <span className={classes.reportTwoTitle}>WORKED THIS WEEK</span>
                        <span className={classes.reportTwoValue}>11:56:33</span>
                    </Grid>
                    <Grid item lg={3} xs={3} className={classes.content}>
                        <Button className={classes.rptBtnRed} size="small">
                            <ArrowDropDownIcon />17%
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        <Grid xs={12}>
            <Button className={classes.viewBtn} size="medium">
                <img src={pdf} className="btn-img"></img>Export As PDF
            </Button>
        </Grid>
    </div>
  );
}

export default Report;
