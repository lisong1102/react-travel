import React from "react";
// import { useSelector } from 'react-redux';
import { Button, Dropdown, Input, Layout, Menu, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

//使用函数组件
// import {RootState} from '../../redux/store'
import { useSelector } from '../../redux/hooks';
export const Header: React.FC = () => {
    const navigate = useNavigate();
    //最好不要将store与组件绑定在一起,不利于组件的复用
    // const language = useSelector((state:RootState)=>state.language)

    const language = useSelector((state)=>state.language)

    return (
        <div className={styles["app-header"]}>
            {/* top-header */}
            <div className={styles["top-header"]}>
                <div className={styles["inner"]}>
                    <Typography.Text>让旅游更幸福</Typography.Text>
                    <Dropdown.Button
                        style={{ marginLeft: 15 }}
                        overlay={
                            <Menu>
                                <Menu.Item>中文</Menu.Item>
                                <Menu.Item>English</Menu.Item>
                            </Menu>
                        }
                        icon={<GlobalOutlined></GlobalOutlined>}
                    >
                        语言
                    </Dropdown.Button>
                    <Button.Group className={styles["button-group"]}>
                        <Button onClick={() => navigate(`/register`)}>
                            注册
                        </Button>
                        <Button onClick={() => navigate(`/login`)}>登陆</Button>
                    </Button.Group>
                </div>
            </div>
            <Layout.Header className={styles["main-header"]}>
                <span onClick={()=>navigate('/')}>
                    <img src={logo} alt="" className={styles["App-logo"]} />
                    <Typography.Title level={3} className={styles.title}>
                        React 旅游网
                    </Typography.Title>
                    <Input.Search
                        className={styles["search-input"]}
                        placeholder={"请输入旅游目的地、主题、或关键字"}
                    />
                </span>
            </Layout.Header>
            <Menu mode={"horizontal"} className={styles["main-menu"]}>
                <Menu.Item key={1}>旅游首页</Menu.Item>
                <Menu.Item key={2}>周末游</Menu.Item>
                <Menu.Item key={3}>跟团游</Menu.Item>
                <Menu.Item key="4"> 自由行 </Menu.Item>
                <Menu.Item key="5"> 私家团 </Menu.Item>
                <Menu.Item key="6"> 邮轮 </Menu.Item>
                <Menu.Item key="7"> 酒店+景点 </Menu.Item>
                <Menu.Item key="8"> 当地玩乐 </Menu.Item>
                <Menu.Item key="9"> 主题游 </Menu.Item>
                <Menu.Item key="10"> 定制游 </Menu.Item>
                <Menu.Item key="11"> 游学 </Menu.Item>
                <Menu.Item key="12"> 签证 </Menu.Item>
                <Menu.Item key="13"> 企业游 </Menu.Item>
                <Menu.Item key="14"> 高端游 </Menu.Item>
                <Menu.Item key="15"> 爱玩户外 </Menu.Item>
                <Menu.Item key="16"> 保险 </Menu.Item>
            </Menu>
        </div>
    );
};
