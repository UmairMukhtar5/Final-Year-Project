import React from 'react';
import {Box, Divider,List,ListItem,ListItemText,Paper} from '@material-ui/core'

const QuestionAnsCard=({question,answer,index}) =>{
  
    
    return (
        <Box borderRadius={20}>

<Paper elevation={5}>
            
        <List>

        <ListItem text style={{
            fontSize: '1.5rem'
        }}>
        <ListItemText primary={<strong
        style={{
            fontSize:'bold'
        }}
        >Question:</strong>} />
        </ListItem>

        <ListItem text>

        <ListItemText primary={question} />
        </ListItem>


        <Divider />


        <ListItem text>
        <ListItemText primary={<strong
        style={{
            fontSize:'bold'
        }}
        >Answer:</strong>} />
        </ListItem>

        <ListItem text>

        <ListItemText primary={!!answer ?answer:'Not provides yet' } />
        </ListItem>

        <Divider />








        </List>

        </Paper>
        </Box>
    )
}




export default QuestionAnsCard
