import './App.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        padding: '10px'
    }
}));

function TodoList() {
    const tableData = [
        {
            date: '20',
            month: 'May',
            name: 'Revamp Instagram App',
            when: 'Today'
        },
        {
            date: '21',
            month: 'May',
            name: 'Prototyping',
            when: 'Upcoming'
        },
        {
            date: '22',
            month: 'May',
            name: 'Collect references for new project',
            when: 'Upcoming'
        }
    ];

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid xs={12}>
           <h3 className={classes.title}>To-Do Lists</h3>
        </Grid>
        <Grid container>
            {
                tableData.map((value, i) => (
                    <Grid container className="todo-list">
                         <Grid item lg={1} md={1} sm={1} xs={1} className="todo-date-container">
                            <h2 className="todo-day">{value.date}</h2>
                            <h4 className="todo-month">{value.month}</h4>
                        </Grid>
                        <Grid item lg={11} md={11} sm={11} xs={11}>
                            <Paper elevation={3} className="todo-paper">
                                <span className="todo-name">{value.name}</span>
                                <span className="todo-subname">{value.when}</span>
                                <span className="todo-option-icon"><MoreHorizIcon /></span>
                            </Paper>
                        </Grid>
                    </Grid>
                ))
            }
        </Grid>
    </div>
  );
}

export default TodoList;
