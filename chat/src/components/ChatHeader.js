import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from 'material-ui/styles'

const styles = theme => ({
    appBar: {
        position: 'fixed',
        width: `calc(100% - 320px)`,
    },
})

const ChatHeader = ({classes}) =>(
    <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
            <Typography variant="h6" noWrap>
                My first chat
            </Typography>
        </Toolbar>
    </AppBar>
);

export default ChatHeader