import './App.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        padding: '10px'
    },
    moreOptionIcon: {
        cursor: 'pointer',
        float: 'right',
        margin: '0px 10px 0px 10px'
    },
    title: {
        display: 'inline-block',
        margin: 0
    },
    tableContent: {
        fontWeight: 'bold !important'
    },
    btnRight: {
        background: '#e9e8f4',
        color: '#382f9c',
        float: 'right',
        fontWeight: 'bold',
        height: '35px',
        padding: '5px 10px 5px 10px'
    },
    btnClassOne: {
        minWidth: '25px',
        maxHeight: '25px',
        margin: '0px 10px 0px 0px',
        fontWeight: '600'
    },
    btnClassTwo: {
        background: '#dcdbea',
        color: '#382f9c',
        minWidth: '25px',
        maxHeight: '25px',
        margin: '0px 10px 0px 0px',
        fontWeight: '600'
    },
    btnClassThree: {
        background: '#dcdbea',
        color: '#382f9c',
        minWidth: '25px',
        maxHeight: '25px',
        margin: '0px 10px 0px 0px',
        fontWeight: '600'
    },
    btnClassFive: {
        background: '#dcdbea',
        color: '#382f9c',
        minWidth: '25px',
        maxHeight: '25px',
        margin: '0px 10px 0px 0px',
        fontWeight: '600'
    },
    btnClassNine: {
        background: '#dcdbea',
        color: '#382f9c',
        minWidth: '25px',
        maxHeight: '25px',
        margin: '0px 10px 0px 0px',
        fontWeight: '600'
    },
    tableBodyContent: {
        fontSize: '11px',
        fontWeight: '600',
        padding: '11px'
    }
}));

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f9f9f9',
        },
    },
}))(TableRow);

function Timesheet() {
    const tableData = [
        {
            count: 1,
            project: 'Landing Page Design',
            date: 'May 21, 2019',
            startTime: '1.10 pm',
            stopTime: '9.20 pm',
            duration: '8:10:37',
            color: '#382f9c',
            bgColor: '#dcdbea'
        },
        {
            count: 3,
            project: 'Mobile App',
            date: 'May 22, 2019',
            startTime: '12.00 pm',
            stopTime: '9.20 pm',
            duration: '8:00:00',
            color: '#bf9e3d',
            bgColor: '#f5f1e3'
        },
        {
            count: 5,
            project: 'UI/UX',
            date: 'May 23, 2019',
            startTime: '1.10 pm',
            stopTime: '1.20 pm',
            duration: '8:10:37',
            color: '#ff5a82',
            bgColor: '#fae9ed'
        },
        {
            count: 2,
            project: 'Website/apps',
            date: 'May 24, 2019',
            startTime: '1.11 pm',
            stopTime: '9.20 pm',
            duration: '7:49:37',
            color: '#1f59ba',
            bgColor: '#dfe9fa'
        },
        {
            count: 9,
            project: 'Branding',
            date: 'May 26, 2019',
            startTime: '1.10 pm',
            stopTime: '1.20 pm',
            duration: '0:10:37',
            color: '#ff8416',
            bgColor: '#faede2'
        }
    ];

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid xs={12}>
            <span>
                <h3 className={classes.title}>Timesheet</h3>
            </span>
            <span className={classes.moreOptionIcon}>
                <MoreHorizIcon />
            </span>
            <span>
                <Button className={classes.btnRight} size="small">
                    View Full Sheet
                </Button>
            </span>
        </Grid>
        <Grid xs={12}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableContent}>Project</TableCell>
                        <TableCell className={classes.tableContent}>Date</TableCell>
                        <TableCell className={classes.tableContent}>Start Time</TableCell>
                        <TableCell className={classes.tableContent}>Stop Time</TableCell>
                        <TableCell className={classes.tableContent}>Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{tableData.map((value, i) => (<StyledTableRow>
                        <TableCell className={classes.tableBodyContent}>
                            <Button className={classes.btnClassOne} style={{ color: value.color, background: value.bgColor }}>
                                {value.count}
                            </Button>{value.project}
                        </TableCell>
                        <TableCell className={classes.tableBodyContent}>
                            {value.date}
                        </TableCell>
                        <TableCell className={classes.tableBodyContent}>
                            {value.startTime}
                        </TableCell>
                        <TableCell className={classes.tableBodyContent}>
                            {value.stopTime}
                        </TableCell>
                        <TableCell className={classes.tableBodyContent}>
                            {value.duration}
                        </TableCell>
                    </StyledTableRow>))}
                </TableBody>
            </Table>
        </Grid>
    </div>
  );
}

export default Timesheet;
