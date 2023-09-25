import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Input, Tooltip } from 'antd';
import Loading from '../Loading/Loading';
const gridStyle = {
    width: '45%',
    textAlign: 'center',
};

export default function Settings() {
    const [loadings, setLoadings] = useState([]);
    const [tokin, setTokin] = useState(null)

    useEffect(() => {
        let tokinSettings = JSON.parse(localStorage.getItem("login"))
        setTokin(tokinSettings)
    }, []);

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };

    const fileInputRef = useRef(null);
    const imageRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imageRef.current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };



    return (
        <div>

            {
                !!tokin ?
                    (
                        <>
                            <Card title="Your Settings">
                                <Tooltip title="Upload" color={"#"}>
                                    <div className='flex items-center justify-center'>
                                        <div className='w-[150px] h-[150px] bg-[#BFBFBF] flex items-center justify-center cursor-pointer rounded-[50px]'>
                                            <input
                                                type="file"
                                                style={{ display: 'none' }}
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                            />
                                            <img
                                                src={tokin.image}
                                                alt="Selected Image"
                                                ref={imageRef}
                                                onClick={handleImageClick}
                                                className='w-[120px] relative bottom-3'
                                            />
                                        </div>
                                    </div>
                                </Tooltip>
                            </Card>
                            <Card>
                                <Card.Grid style={gridStyle} className='m-5 cursor-pointer'>
                                    Full name: <br />
                                    <Input placeholder="Full name" allowClear className='w-[300px] mt-3' defaultValue={tokin.firstName} />
                                </Card.Grid>
                                <Card.Grid style={gridStyle} className='m-5 cursor-pointer'>
                                    Username: <br />
                                    <Input placeholder="Username" allowClear className='w-[300px] mt-3' defaultValue={tokin.username} />
                                </Card.Grid>
                                <Card.Grid style={gridStyle} className='m-5 cursor-pointer'>
                                    Email: <br />
                                    <Input placeholder="Email" allowClear className='w-[300px] mt-3' defaultValue={tokin.email} />
                                </Card.Grid>
                                <Card.Grid style={gridStyle} className='m-5 cursor-pointer'>
                                    Phone number: <br />
                                    <Input placeholder="Phone number" allowClear className='w-[300px] mt-3' defaultValue={tokin.id} />
                                </Card.Grid>
                            </Card>
                        </>
                    )
                    :
                    (
                        <>
                            <Loading />
                        </>
                    )

            }

            <Card className='mt-5 flex items-center justify-end'>
                <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)} className='bg-blue-500'>
                    Click me!
                </Button>
            </Card>
        </div>
    )
}
