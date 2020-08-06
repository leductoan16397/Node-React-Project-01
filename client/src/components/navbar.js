import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import classNames from 'classnames'


const useStyles = makeStyles((theme) => ({
    root: {
    },
    buttonStyle: {
        fontSize: '12px'
    },
    toolbar: {
        background: 'white',
        margin: 'auto',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
    },
    toolbarNoShadow: {
        background: 'white',
        margin: 'auto',
    }
}));

export default function NvarBar(props) {
    const classes = useStyles();
    let styleToolbar = classes.toolbar;
    const [logoSrc, setLogoSrc] = useState();
    const color = 'transparent';
    useEffect(() => {
        setLogoSrc("/static/karma/img/logo/logo.png");
    }, [])
    function ElevationScroll(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: window ? window() : undefined,
        });

        console.log(styleToolbar);
        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
            color: trigger ? 'inherit' : 'transparent',
        });
    }

    ElevationScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    return (
        <React.Fragment >
            <CssBaseline />
            <ElevationScroll >
                <AppBar className={classes.root} color={color}>
                    <Toolbar className={classNames(classes.toolbar, 'container')} >
                        <div>
                            <img src={logoSrc} alt='' />
                        </div>
                        <div style={{ flexGrow: 1 }} className='row'>
                            <div style={{ marginLeft: 'auto' }}>
                                <Button className={classes.buttonStyle} color="inherit">HOME</Button>
                                <Button className={classes.buttonStyle} color="inherit">SHOP</Button>
                                <Button className={classes.buttonStyle} color="inherit">BLOG</Button>
                                <Button className={classes.buttonStyle} color="inherit">PAGES</Button>
                                <Button className={classes.buttonStyle} color="inherit">CONTACT</Button>
                            </div>
                            <div>
                                <IconButton aria-label="Cart" color="inherit">
                                    <ShoppingCartIcon />
                                </IconButton>
                                <IconButton aria-label="search" color="inherit">
                                    <SearchIcon />
                                </IconButton>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    );
}