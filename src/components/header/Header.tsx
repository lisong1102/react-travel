import React from "react";
// import { useSelector } from 'react-redux';
import { Button, Dropdown, Input, Layout, Menu, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

//使用函数组件
// import {RootState} from '../../redux/store'
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { changeLanguageActionCreator } from "../../redux/language/languageActions";

import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
    const navigate = useNavigate();
    //最好不要将store与组件绑定在一起,不利于组件的复用
    // const language = useSelector((state:RootState)=>state.language)

    const language = useSelector((state) => state.language);
    const languageList = useSelector((state) => state.languageList);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const menuClickHandler = (e: any) => {
        console.log(e);
        dispatch(changeLanguageActionCreator(e.key));
    };
    return (
        <div className={styles["app-header"]}>
            {/* top-header */}
            <div className={styles["top-header"]}>
                <div className={styles["inner"]}>
                    <Typography.Text>让旅游更幸福</Typography.Text>
                    <Dropdown.Button
                        style={{ marginLeft: 15 }}
                        overlay={
                            <Menu onClick={menuClickHandler}>
                                {languageList.map((l) => {
                                    return (
                                        <Menu.Item key={l.code}>
                                            {l.name}
                                        </Menu.Item>
                                    );
                                })}
                            </Menu>
                        }
                        icon={<GlobalOutlined></GlobalOutlined>}
                    >
                        {language === "zh" ? "中文" : "English"}
                    </Dropdown.Button>
                    <Button.Group className={styles["button-group"]}>
                        <Button onClick={() => navigate(`/register`)}>
                            {t("header.register")}
                        </Button>
                        <Button onClick={() => navigate(`/login`)}>
                            {" "}
                            {t("header.signin")}
                        </Button>
                    </Button.Group>
                </div>
            </div>
            <Layout.Header className={styles["main-header"]}>
                <span onClick={() => navigate("/")}>
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
                <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
                <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
                <Menu.Item key="3"> {t("header.group")} </Menu.Item>
                <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
                <Menu.Item key="5"> {t("header.private")} </Menu.Item>
                <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
                <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
                <Menu.Item key="8"> {t("header.local")} </Menu.Item>
                <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
                <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
                <Menu.Item key="11"> {t("header.study")} </Menu.Item>
                <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
                <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
                <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
                <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
                <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
            </Menu>
        </div>
    );
};
