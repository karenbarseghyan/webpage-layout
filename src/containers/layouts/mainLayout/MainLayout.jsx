import { Container, Paper } from '@material-ui/core'
import React from 'react'
import { Header } from '../../../components/common'
import './MainLayout.css'

const MainLayout = props => {
    return (
        <>
            <Header />
            <Container className = "MainLayout__Container" maxWidth="lg">
                <Paper className = "MainLayout__Paper" elevation ={3}>
                    {props.children}
                </Paper>
            </Container>
        </>
    )
};

export default MainLayout;