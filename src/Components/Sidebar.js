import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from "react-router";
import AddIcon from '@mui/icons-material/Add';


const drawerWidth = 240

function ResponsiveDrawer(props) {
    let navigate = useNavigate()


    const { windows } = props
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const { children } = props
    const [value, setValue] = React.useState(0)
    const theme = useTheme()
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    }

    const [anchorEl, setAnchorEl] = React.useState(null)

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div>
            <Box className="logoBox" >
                <img width={100} src='data:image/png;base64,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' className="logo" />
            </Box>
            <Divider />
            <List>
                <ListItem button onClick={() => navigate('/')}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText
                        sx={{ color: '#000', textDecoration: 'none!important' }}
                        primary="Posts"
                    />
                </ListItem>
            </List>
            <Divider />
            {/* <List>
                <ListItem button onClick={() => navigate('/myblog')}>
                    <ListItemIcon>
                        <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText primary="Blogs"  />
                </ListItem>
            </List> */}
            <Divider />
            <List>
                <ListItem button onClick={() => navigate('/createpost')} >
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Post" />
                </ListItem>
            </List>
        </div>
    )

    const container =
        windows !== undefined ? () => windows().document.body : undefined

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
                        Blogs
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    backgroundColor: '#E8EAED',
                }}
            >
                <Toolbar />
                {children}

            </Box>
        </Box>
    )
}

ResponsiveDrawer.propTypes = {
    windows: PropTypes.func,
}

export default ResponsiveDrawer