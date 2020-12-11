import React from 'react';
import {Box, Divider,List,ListItem,ListItemText,Paper} from '@material-ui/core'

const QuestionAnsCard=({question,answer,index}) =>{
    
    return (

<Paper elevation={3} >
        <Box border={1} borderColor={index%2==0 ? "primary.main":"secondary.main"}>
            
        <List>

        <ListItem text style={{
            fontSize: '1.5rem'
        }}>
        <ListItemText primary="Question:" />
        </ListItem>

        <ListItem text>

        <ListItemText primary={question} />
        </ListItem>


        <Divider />


        <ListItem text>
        <ListItemText primary="Answer:" />
        </ListItem>

        <ListItem text>

        <ListItemText primary={!!answer ?answer:'Not provides yet' } />
        </ListItem>

        <Divider />








        </List>

        </Box>
        </Paper>
    )
}




export default QuestionAnsCard
