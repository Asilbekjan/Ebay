import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Carts from './Charts/Charts'
import { Card } from 'antd';
import Cards from '../Card/Card'
import Add_a_FreeProduct from '../Add_a_FreeProduct/Add_a_FreeProduct';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Activity() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card className='p-[50px]'>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 300 }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Your Activity" {...a11yProps(0)} />
                    <Tab label="Saved Blogs" {...a11yProps(1)} />
                    <Tab label="Like Blogs" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
<<<<<<< HEAD
                    <Carts />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Cards />
=======
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    saqlanganlar
>>>>>10d63368267c6db371
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Likelar
                </TabPanel>
            </Box>
        </Card>
    );
}