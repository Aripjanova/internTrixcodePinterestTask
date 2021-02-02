import ChangeProfile from './changeProfile'
import { makeStyles } from '@material-ui/core/styles';
import {Container} from "@material-ui/core";

export default function Home() {
    const useStyles = makeStyles({
        root: {
           margin:0,
           padding:0
        },
    });
    const classes = useStyles();
    return (

        <Container className={classes.root}>
            <ChangeProfile/>
        </Container>
    )
}